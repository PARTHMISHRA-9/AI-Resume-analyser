from typing import List, Dict

class SuggestionEngine:
    """Generate AI-powered suggestions for resume improvement"""

    @staticmethod
    def generate_suggestions(resume_data: Dict) -> List[Dict]:
        """Generate improvement suggestions based on analysis"""
        suggestions = []

        # ATS Score suggestions
        if resume_data.get('ats_score', 0) < 70:
            suggestions.append({
                'category': 'ATS Compatibility',
                'suggestion': 'Improve ATS compatibility by using standard fonts and formatting',
                'impact': 'high',
                'priority': 1
            })

        # Keyword suggestions
        if resume_data.get('missing_keywords', {}).get('technical'):
            missing = resume_data['missing_keywords']['technical'][:3]
            suggestions.append({
                'category': 'Keywords',
                'suggestion': f'Add relevant technical keywords: {", ".join(missing)}',
                'impact': 'high',
                'priority': 2
            })

        # Structure suggestions
        if not resume_data.get('has_clear_sections'):
            suggestions.append({
                'category': 'Structure',
                'suggestion': 'Organize resume with clear sections: Summary, Experience, Education, Skills',
                'impact': 'medium',
                'priority': 3
            })

        # Length suggestions
        if resume_data.get('word_count', 0) > 1000:
            suggestions.append({
                'category': 'Length',
                'suggestion': 'Keep resume to 1 page (or 2 max). Remove outdated information.',
                'impact': 'medium',
                'priority': 4
            })

        # Quantification suggestions
        if resume_data.get('quantified_metrics', 0) < 5:
            suggestions.append({
                'category': 'Impact',
                'suggestion': 'Quantify achievements with metrics (e.g., "Increased sales by 25%")',
                'impact': 'high',
                'priority': 5
            })

        return sorted(suggestions, key=lambda x: x['priority'])

    @staticmethod
    def get_formatting_recommendations(resume_text: str) -> List[str]:
        """Get formatting improvement recommendations"""
        recommendations = []

        # Check for consistent formatting
        if '\t' not in resume_text and '  ' in resume_text:
            recommendations.append('Use consistent spacing or tabs for alignment')

        # Check for special characters
        special_chars = sum(1 for c in resume_text if ord(c) > 127)
        if special_chars > len(resume_text) * 0.05:
            recommendations.append('Limit special characters; use standard symbols')

        # Check for headers
        if resume_text.count('\n\n') < 3:
            recommendations.append('Use clear section headers to organize content')

        return recommendations

    @staticmethod
    def get_content_recommendations(resume_text: str) -> List[str]:
        """Get content improvement recommendations"""
        recommendations = []

        # Check for action verbs
        action_verbs = ['managed', 'developed', 'led', 'created', 'improved', 'achieved']
        if not any(verb in resume_text.lower() for verb in action_verbs):
            recommendations.append('Start bullet points with strong action verbs')

        # Check for metrics
        import re
        metrics = re.findall(r'\d+%|\$\d+|\d+x', resume_text)
        if len(metrics) < 3:
            recommendations.append('Add quantifiable metrics to your achievements')

        # Check for keywords
        if len(resume_text) < 300:
            recommendations.append('Expand your resume with more details and experience')

        return recommendations
