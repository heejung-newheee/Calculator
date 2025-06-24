import { useState } from 'react';

type QuestionType = 'percentage' | 'count';

interface Question {
    number: number;
    category: string;
    question: string;
    type: QuestionType;
    weight: number;
}

const leadershipQuestions: Question[] = [
    {
        number: 1,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as Black, African, or Afro-Caribbean?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 2,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as East Asian (e.g., Chinese, Korean, Japanese)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 3,
        category: 'Race and Ethnicity',
        question:
            'What percentage of school leadership identify as South Asian (e.g., Indian, Pakistani, Bangladeshi, Sri Lankan)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 4,
        category: 'Race and Ethnicity',
        question:
            'What percentage of school leadership identify as Southeast Asian (e.g., Filipino, Vietnamese, Thai, Indonesian)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 5,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as Middle Eastern or North African (MENA)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 6,
        category: 'Race and Ethnicity',
        question:
            'What percentage of school leadership identify as Hispanic or Latino/a/x (e.g., Mexican, Colombian, Dominican)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 7,
        category: 'Race and Ethnicity',
        question:
            'What percentage of school leadership identify as Indigenous or Native (e.g., Native American, Ainu, Sámi, Aboriginal, Māori)?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 8,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as Pacific Islander or Native Hawaiian?',
        type: 'percentage',
        weight: 1.5
    },
    {
        number: 9,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as White or Caucasian (including European descent)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 10,
        category: 'Race and Ethnicity',
        question: 'What percentage of school leadership identify as Multiracial or Mixed?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 11,
        category: 'Gender Identity',
        question: 'What percentage of school leadership identify as female?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 12,
        category: 'Gender Identity',
        question: 'What percentage of school leadership identify as male?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 13,
        category: 'Gender Identity',
        question: 'What percentage of school leadership identify as non-binary, genderqueer, or gender nonconforming?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 14,
        category: 'Gender Identity',
        question: 'What percentage of school leadership identify as transgender (of any gender identity)?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 15,
        category: 'Gender Identity',
        question: 'What percentage of school leadership selected "prefer to self-describe" for gender identity?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 16,
        category: 'Gender Identity',
        question: 'What percentage of school leadership selected "prefer not to say" for gender identity?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 17,
        category: 'Neurodiversity/Disability',
        question:
            'What percentage of school leadership are formally diagnosed with a learning disability (e.g., dyslexia, dyscalculia, dysgraphia)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 18,
        category: 'Neurodiversity/Disability',
        question: `What percentage of school leadership are identified as neurodivergent (e.g., autism, ADHD, Tourette's, etc.)?`,
        type: 'percentage',
        weight: 1
    },
    {
        number: 19,
        category: 'Neurodiversity/Disability',
        question:
            'What percentage of school leadership have a physical disability (e.g., mobility, vision, hearing impairments)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 20,
        category: 'Language',
        question:
            'What percentage of school leadership speak a language other than the primary instructional language at home?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 21,
        category: 'Language',
        question: 'What percentage of school leadership are classified as Second Language English Speakers?',
        type: 'percentage',
        weight: 1
    },

    {
        number: 22,
        category: 'Language',
        question: 'How many different home languages are spoken across the leadership body?',
        type: 'count',
        weight: 1
    }
];

export default function LeadershipCalculator() {
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    const handleChange = (number: number, value: string) => {
        setResponses((prev) => ({ ...prev, [number]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;
        let totalWeight = 0;

        leadershipQuestions.forEach((q) => {
            const rawValue = responses[q.number];
            const value = parseFloat(rawValue) || 0;
            let score = 0;

            if (q.type === 'percentage') {
                score = (value / 100) * q.weight;
            } else if (q.type === 'count') {
                let baseScore = 0;
                if (value >= 0 && value <= 1) baseScore = 0;
                else if (value >= 2 && value <= 3) baseScore = 0.2;
                else if (value >= 4 && value <= 5) baseScore = 0.4;
                else if (value >= 6 && value <= 7) baseScore = 0.6;
                else if (value >= 8 && value <= 9) baseScore = 0.8;
                else if (value >= 10) baseScore = 1;

                score = baseScore * q.weight;
            }

            totalScore += score;
            totalWeight += q.weight;
        });

        const average = totalScore / totalWeight;
        setFinalScore(parseFloat(average.toFixed(3)));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">
            {/* <h1 className="text-2xl font-bold mb-6">📊 Leadership Survey 점수 계산기</h1> */}
            <table className="table-auto w-full mb-6 border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-2 py-1">No</th>
                        <th className="border px-2 py-1">Question</th>
                        <th className="border px-2 py-1">Response</th>
                        <th className="border px-2 py-1">Type</th>
                        <th className="border px-2 py-1">x</th>
                    </tr>
                </thead>
                <tbody>
                    {leadershipQuestions.map((q) => (
                        <tr key={q.number}>
                            <td className="border px-2 py-1 text-center">{q.number}</td>
                            <td className="border px-2 py-1">{q.question}</td>
                            <td className="border px-2 py-1">
                                <input
                                    type="number"
                                    value={responses[q.number] || ''}
                                    onChange={(e) => handleChange(q.number, e.target.value)}
                                    className="border rounded p-1 w-28"
                                />
                            </td>
                            <td className="border px-2 py-1">{q.type}</td>
                            <td className="border px-2 py-1">{q.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={calculateScore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                점수 계산하기
            </button>

            {finalScore !== null && (
                <div className="mt-6 text-xl font-bold text-green-600">📊 최종 평균 점수: {finalScore}</div>
            )}
        </div>
    );
}
