import { useState } from 'react';

const policyQuestions = [
    {
        number: 1,
        category: 'General',
        question: 'Does the school have a written DEI (Diversity, Equity, and Inclusion) policy?',
        type: 'binary',
        weight: 3
    },
    {
        number: 2,
        category: 'General',
        question: 'Is the DEI policy publicly available (e.g., on the school website)?',
        type: 'binary',
        weight: 2
    },
    {
        number: 3,
        category: 'General',
        question: 'Does the DEI policy explicitly mention race, gender, disability, and other protected identities?',
        type: 'binary',
        weight: 3
    },
    {
        number: 4,
        category: 'General',
        question: 'Does the school have a designated DEI officer or team?',
        type: 'binary',
        weight: 3
    },
    {
        number: 5,
        category: 'General',
        question: `Is DEI included in the school's mission statement or core values?`,
        type: 'binary',
        weight: 2
    },
    {
        number: 6,
        category: 'General',
        question: `Are there specific goals related to diversity, equity, or inclusion in the school's strategic plan?`,
        type: 'binary',
        weight: 2
    },
    {
        number: 7,
        category: 'General',
        question:
            'Does the school have a published non-discrimination statement that includes all major identity groups?',
        type: 'binary',
        weight: 2
    },
    {
        number: 8,
        category: 'General',
        question: 'Does the school have a formal process for students or staff to report discrimination or bias?',
        type: 'binary',
        weight: 3
    },
    {
        number: 9,
        category: 'General',
        question: 'Is there a defined consequence structure for discrimination or harassment?',
        type: 'binary',
        weight: 3
    },
    {
        number: 10,
        category: 'General',
        question: 'Are families informed about DEI-related policies and procedures?',
        type: 'binary',
        weight: 2
    },
    {
        number: 11,
        category: 'General',
        question: 'Are policies and communications available in multiple languages?',
        type: 'binary',
        weight: 2
    },
    {
        number: 12,
        category: 'General',
        question: 'Are staff from underrepresented groups consulted in school policy decisions?',
        type: 'binary',
        weight: 1
    },
    {
        number: 13,
        category: 'General',
        question: 'Is there a review process for school-wide policies to assess equity impact?',
        type: 'binary',
        weight: 2
    },
    {
        number: 14,
        category: 'General',
        question: 'Are inclusive restroom policies (e.g., gender-neutral options) explicitly stated in school policy?',
        type: 'binary',
        weight: 2
    },
    {
        number: 15,
        category: 'General',
        question: 'Is there a policy protecting students and staff from retaliation after reporting discrimination?',
        type: 'binary',
        weight: 3
    },
    {
        number: 16,
        category: 'General',
        question: 'Does the school disaggregate outcome data (e.g., graduation, discipline) by race, gender, etc.?',
        type: 'binary',
        weight: 3
    },
    {
        number: 17,
        category: 'General',
        question: 'Are DEI priorities presented in annual school reports or evaluations?',
        type: 'binary',
        weight: 2
    },
    {
        number: 18,
        category: 'General',
        question: 'How many months has it been since the DEI policy (or equivalent) has been reviewed?',
        type: 'count_months',
        weight: 2
    }
];

export default function PolicyCalculator() {
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    const handleChange = (number: number, value: string) => {
        setResponses((prev) => ({ ...prev, [number]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;

        policyQuestions.forEach((q) => {
            const value =
                q.type === 'binary' ? (responses[q.number] === 'yes' ? 1 : 0) : parseFloat(responses[q.number]) || 0;

            let score = 0;

            if (q.type === 'binary') {
                score = value * q.weight;
            } else if (q.type === 'count_months') {
                if (value >= 0 && value <= 6) score = 0.9 * q.weight;
                else if (value >= 7 && value <= 12) score = 0.6 * q.weight;
                else if (value >= 13 && value <= 23) score = 0.3 * q.weight;
                else score = 0;
            }

            totalScore += score;
        });

        const average = totalScore / 267;
        setFinalScore(parseFloat(average.toFixed(3)));
    };

    return (
        <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow">
            {/* <h1 className="text-2xl font-bold mb-6">📑 DEI 정책 점수 계산기</h1> */}
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
                    {policyQuestions.map((q) => (
                        <tr key={q.number}>
                            <td className="border px-2 py-1 text-center">{q.number}</td>
                            <td className="border px-2 py-1">{q.question}</td>
                            <td className="border px-2 py-1">
                                {q.type === 'binary' ? (
                                    <select
                                        value={responses[q.number] || ''}
                                        onChange={(e) => handleChange(q.number, e.target.value)}
                                        className="border rounded p-1">
                                        <option value="">Select</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                ) : (
                                    <input
                                        type="number"
                                        value={responses[q.number] || ''}
                                        onChange={(e) => handleChange(q.number, e.target.value)}
                                        className="border rounded p-1 w-24"
                                    />
                                )}
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
