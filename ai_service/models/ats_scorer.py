import json
from typing import Dict, List
import os

class ATSScorer:
    """Score resume for ATS compatibility"""

    def __init__(self):
        self.criteria = {
            'formatting': 0,
            'keywords': 0,
            'structure': 0,
            'readability': 0,
        }

    @staticmethod
    def check_formatting(text: str) -> float:
        """Check formatting compatibility (0-25 points)"""
        score = 0
        text_lower = text.lower()

        # Check for tables (usually problematic for ATS)
        if '|' not in text:
            score += 5

        # Check for consistent spacing
        lines = text.split('\n')
        if len(lines) > 5:
            score += 5

        # Check for bullet points
        if '•' in text or '-' in text:
            score += 5

        # Check for excessive formatting
        special_chars = len([c for c in text if ord(c) > 127])
        if special_chars < len(text) * 0.1:  # Less than 10% special chars
            score += 10

        return min(score, 25)

    @staticmethod
    def check_structure(text: str) -> float:
        """Check resume structure (0-25 points)"""
        score = 0
        text_lower = text.lower()

        # Check for key sections
        sections = ['experience', 'education', 'skills']
        for section in sections:
            if section in text_lower:
                score += 7

        # Check for dates (work history indicator)
        import re
        date_pattern = r'\b\d{4}\b|\b\d{1,2}/\d{1,2}\b'
        if re.search(date_pattern, text):
            score += 4

        return min(score, 25)

    @staticmethod
    def check_keywords(text: str, job_description: str = None) -> float:
        """Check for relevant keywords (0-25 points)"""
        score = 0
        text_lower = text.lower()

        # Common technical keywords
        tech_keywords = [
            'python', 'java', 'javascript', 'sql', 'aws', 'azure',
            'machine learning', 'data analysis', 'react', 'nodejs',
            'docker', 'kubernetes', 'git', 'api', 'rest', 'graphql'
        ]

        found_keywords = sum(1 for keyword in tech_keywords if keyword in text_lower)
        score += min(found_keywords * 1.5, 25)

        return min(score, 25)

    @staticmethod
    def check_readability(text: str) -> float:
        """Check readability for ATS (0-25 points)"""
        score = 0
        lines = text.split('\n')
        words = text.split()

        # Check average line length (should be reasonable)
        avg_line_length = len(text) / max(len(lines), 1)
        if 30 < avg_line_length < 120:
            score += 10

        # Check for sections
        if len(lines) > 20:
            score += 8

        # Check for descriptions/details
        if len(words) > 100:
            score += 7

        return min(score, 25)

    def calculate_ats_score(self, text: str, job_description: str = None) -> int:
        """Calculate overall ATS score (0-100)"""
        formatting_score = self.check_formatting(text)
        structure_score = self.check_structure(text)
        keywords_score = self.check_keywords(text, job_description)
        readability_score = self.check_readability(text)

        total_score = (formatting_score + structure_score + keywords_score + readability_score)

        return int(total_score)

    def get_detailed_scores(self, text: str) -> Dict[str, float]:
        """Get detailed scores for each criterion"""
        return {
            'formatting': self.check_formatting(text),
            'structure': self.check_structure(text),
            'keywords': self.check_keywords(text),
            'readability': self.check_readability(text),
        }
