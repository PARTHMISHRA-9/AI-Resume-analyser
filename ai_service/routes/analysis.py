from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
import os
import tempfile
from typing import Optional
from models.resume_parser import ResumeParser
from models.ats_scorer import ATSScorer
from models.keyword_extractor import KeywordExtractor
from models.suggestion_engine import SuggestionEngine

router = APIRouter()

@router.post("/analyze")
async def analyze_resume(
    file: UploadFile = File(...),
    job_description: Optional[str] = None
):
    """Analyze uploaded resume"""
    try:
        # Save uploaded file
        with tempfile.NamedTemporaryFile(delete=False, suffix=os.path.splitext(file.filename)[1]) as tmp:
            contents = await file.read()
            tmp.write(contents)
            tmp_path = tmp.name

        try:
            # Get file type
            file_type = os.path.splitext(file.filename)[1][1:]
            if file_type == 'pdf':
                file_type = 'pdf'
            elif file_type in ['doc', 'docx']:
                file_type = 'docx'
            else:
                raise HTTPException(status_code=400, detail="Unsupported file type")

            # Parse resume
            parser = ResumeParser()
            resume_text = parser.extract_text(tmp_path, file_type)

            # Calculate ATS score
            scorer = ATSScorer()
            ats_score = scorer.calculate_ats_score(resume_text, job_description)
            detailed_scores = scorer.get_detailed_scores(resume_text)

            # Extract keywords
            extractor = KeywordExtractor()
            found_keywords = extractor.extract_keywords(resume_text)
            missing_keywords = extractor.get_missing_keywords(resume_text)
            keyword_score = extractor.get_keyword_score(resume_text)

            # Generate suggestions
            suggestion_engine = SuggestionEngine()
            resume_data = {
                'ats_score': ats_score,
                'missing_keywords': missing_keywords,
                'word_count': len(resume_text.split()),
                'has_clear_sections': any(section in resume_text.lower() for section in ['experience', 'education', 'skills']),
                'quantified_metrics': len([c for c in resume_text if c.isdigit()]) > 5,
            }
            suggestions = suggestion_engine.generate_suggestions(resume_data)
            formatting_recommendations = suggestion_engine.get_formatting_recommendations(resume_text)
            content_recommendations = suggestion_engine.get_content_recommendations(resume_text)

            return JSONResponse({
                'ats_score': ats_score,
                'detailed_scores': detailed_scores,
                'keywords_found': found_keywords,
                'keywords_missing': missing_keywords,
                'keyword_score': keyword_score,
                'suggestions': suggestions,
                'formatting_recommendations': formatting_recommendations,
                'content_recommendations': content_recommendations,
                'overall_score': int((ats_score + keyword_score) / 2),
            })

        finally:
            # Clean up temp file
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
