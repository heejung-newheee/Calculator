import { useState } from 'react';

const staffQuestions = [
    {
        number: 1,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as Black, African, or Afro-Caribbean?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 2,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as East Asian (e.g., Chinese, Korean, Japanese)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 3,
        category: 'Race and Ethnicity',
        question:
            'WWhat percentage of staff identify as South Asian (e.g., Indian, Pakistani, Bangladeshi, Sri Lankan)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 4,
        category: 'Race and Ethnicity',
        question:
            'What percentage of staff identify as Southeast Asian (e.g., Filipino, Vietnamese, Thai, Indonesian)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 5,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as Middle Eastern or North African (MENA)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 6,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as Hispanic or Latino/a/x (e.g., Mexican, Colombian, Dominican)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 7,
        category: 'Race and Ethnicity',
        question:
            'What percentage of staff identify as Indigenous or Native (e.g., Native American, Ainu, Sámi, Aboriginal, Māori)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 8,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as Pacific Islander or Native Hawaiian?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 9,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as White or Caucasian (including European descent)?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 10,
        category: 'Race and Ethnicity',
        question: 'What percentage of staff identify as Multiracial or Mixed?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 11,
        category: 'Gender Identity',
        question: 'What percentage of staff identify as female?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 12,
        category: 'Gender Identity',
        question: 'What percentage of staff identify as male?',
        type: 'percentage',
        weight: 0.5
    },
    {
        number: 13,
        category: 'Gender Identity',
        question: 'What percentage of staff identify as non-binary, genderqueer, or gender nonconforming?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 14,
        category: 'Gender Identity',
        question: 'What percentage of staff identify as transgender (of any gender identity)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 15,
        category: 'Gender Identity',
        question: 'What percentage of staff selected "prefer to self-describe" for gender identity?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 16,
        category: 'Gender Identity',
        question: 'What percentage of staff selected "œprefer not to say" for gender identity?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 17,
        category: 'Neurodiversity/Disability',
        question:
            'What percentage of staff are formally diagnosed with a learning disability (e.g., dyslexia, dyscalculia, dysgraphia)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 18,
        category: 'Neurodiversity/Disability',
        question: `What percentage of staff are identified as neurodivergent (e.g., autism, ADHD, Tourette's, etc.)?`,
        type: 'percentage',
        weight: 2
    },
    {
        number: 19,
        category: 'Neurodiversity/Disability',
        question: 'What percentage of staff have a physical disability (e.g., mobility, vision, hearing impairments)?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 20,
        category: 'Language',
        question: 'What percentage of staff speak a language other than the primary instructional language at home?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 21,
        category: 'Language',
        question: 'What percentage of staff are classified as Second Language English Speakers?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 22,
        category: 'Language',
        question: 'How many different home languages are spoken across the staff body?',
        type: 'count',
        weight: 2
    }
];

export default function StaffCalculator() {
    const [responses, setResponses] = useState({});
    const [finalScore, setFinalScore] = useState(null);

    const handleChange = (number, value) => {
        setResponses((prev) => ({ ...prev, [number]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;

        staffQuestions.forEach((q) => {
            const value = parseFloat(responses[q.number]) || 0;
            let score = 0;

            if (q.type === 'percentage') {
                score = (value / 100) * q.weight;
            } else if (q.type === 'count') {
                if (value <= 1) score = 0;
                else if (value <= 3) score = 0.2;
                else if (value <= 5) score = 0.4;
                else if (value <= 7) score = 0.6;
                else if (value <= 9) score = 0.8;
                else score = 1;
                score *= q.weight;
            }

            totalScore += score;
        });

        const average = totalScore / 267;
        setFinalScore(average.toFixed(3));
    };

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow">
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
                    {staffQuestions.map((q) => (
                        <tr key={q.number}>
                            <td className="border px-2 py-1 text-center">{q.number}</td>
                            <td className="border px-2 py-1">{q.question}</td>
                            <td className="border px-2 py-1">
                                <input
                                    type="number"
                                    value={responses[q.number] || ''}
                                    onChange={(e) => handleChange(q.number, e.target.value)}
                                    className="border rounded p-1 w-24"
                                />
                            </td>
                            <td className="border px-2 py-1 text-center">{q.type}</td>
                            <td className="border px-2 py-1 text-center">{q.weight}</td>
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
