import json
import os
from typing import List, Dict

class KeywordExtractor:
    """Extract and match keywords in resumes"""

    def __init__(self):
        self.job_keywords = self.load_job_keywords()

    @staticmethod
    def load_job_keywords() -> Dict[str, List[str]]:
        """Load job keywords database"""
        keywords_db = {
            'technical': [
                'python', 'javascript', 'java', 'c++', 'react', 'nodejs',
                'sql', 'mongodb', 'aws', 'azure', 'docker', 'kubernetes',
                'machine learning', 'data analysis', 'api', 'rest', 'graphql',
                'git', 'linux', 'windows', 'macos', 'agile', 'scrum'
            ],
            'soft_skills': [
                'communication', 'leadership', 'teamwork', 'problem solving',
                'project management', 'time management', 'critical thinking',
                'collaboration', 'adaptability', 'creativity', 'attention to detail'
            ],
            'certifications': [
                'aws certified', 'azure certified', 'cisca', 'pmp',
                'scrum master', 'google certified', 'ibm certified'
            ]
        }
        return keywords_db

    def extract_keywords(self, text: str) -> Dict[str, List[str]]:
        """Extract keywords found in resume"""
        text_lower = text.lower()
        found_keywords = {
            'technical': [],
            'soft_skills': [],
            'certifications': []
        }

        for category, keywords in self.job_keywords.items():
            for keyword in keywords:
                if keyword in text_lower:
                    found_keywords[category].append(keyword)

        return found_keywords

    def get_missing_keywords(self, text: str) -> Dict[str, List[str]]:
        """Get keywords missing from resume"""
        text_lower = text.lower()
        missing_keywords = {
            'technical': [],
            'soft_skills': [],
            'certifications': []
        }

        for category, keywords in self.job_keywords.items():
            for keyword in keywords:
                if keyword not in text_lower:
                    missing_keywords[category].append(keyword)

        return missing_keywords

    def get_keyword_score(self, text: str) -> float:
        """Calculate keyword coverage score (0-100)"""
        found = self.extract_keywords(text)
        total_found = sum(len(v) for v in found.values())
        total_keywords = sum(len(v) for v in self.job_keywords.values())

        if total_keywords == 0:
            return 0

        return (total_found / total_keywords) * 100
