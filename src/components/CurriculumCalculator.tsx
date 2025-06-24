import { useState } from 'react';

type QuestionType = 'binary' | 'percentage';

interface Question {
    number: number;
    category: string;
    question: string;
    type: QuestionType;
    weight: number;
}

const curriculumQuestions: Question[] = [
    {
        number: 1,
        category: 'General',
        question: 'Does the school review curriculum materials for cultural or racial bias?',
        type: 'binary',
        weight: 3
    },
    {
        number: 2,
        category: 'General',
        question: 'Does the curriculum include authors or creators from racial and ethnic minority backgrounds?',
        type: 'binary',
        weight: 3
    },
    {
        number: 3,
        category: 'General',
        question: 'Does the curriculum include works by LGBTQ+ individuals?',
        type: 'binary',
        weight: 2
    },
    {
        number: 4,
        category: 'General',
        question: 'Does the school teach about colonialism and its impact on different regions?',
        type: 'binary',
        weight: 1
    },
    {
        number: 5,
        category: 'General',
        question: 'Are the contributions of women highlighted across subjects?',
        type: 'binary',
        weight: 1
    },
    {
        number: 6,
        category: 'General',
        question: 'Are disability rights, history, or experiences covered in the curriculum?',
        type: 'binary',
        weight: 1
    },
    {
        number: 7,
        category: 'General',
        question: 'Does the curriculum include global or non-Western perspectives?',
        type: 'binary',
        weight: 2
    },
    {
        number: 8,
        category: 'General',
        question: 'Are religions other than the dominant one(s) taught in a respectful and informative way?',
        type: 'binary',
        weight: 1
    },
    {
        number: 9,
        category: 'General',
        question: 'Are current events involving race, identity, or injustice discussed in class (when appropriate)?',
        type: 'binary',
        weight: 2
    },
    {
        number: 10,
        category: 'General',
        question: 'Are students encouraged to reflect on their own identity or background through class activities?',
        type: 'binary',
        weight: 2
    },
    {
        number: 11,
        category: 'General',
        question: 'Are books/media in the library available in multiple languages or from multiple cultures?',
        type: 'binary',
        weight: 2
    },
    {
        number: 12,
        category: 'General',
        question: 'Does the curriculum include content from migrant or refugee perspectives?',
        type: 'binary',
        weight: 2
    },
    {
        number: 13,
        category: 'General',
        question: 'Are LGBTQ+ identities represented outside of just Pride Month or one-off lessons?',
        type: 'binary',
        weight: 2
    },
    {
        number: 14,
        category: 'General',
        question: 'Are cultural and religious holidays other than the majority ones acknowledged in lessons?',
        type: 'binary',
        weight: 2
    },
    {
        number: 15,
        category: 'General',
        question: `Are examples used in Maths, Science, or other 'neutral' subjects made inclusive or culturally relevant?`,
        type: 'binary',
        weight: 2
    },
    {
        number: 16,
        category: 'General',
        question: 'Are parents or community members from minority backgrounds ever invited to contribute to lessons?',
        type: 'binary',
        weight: 2
    },
    {
        number: 17,
        category: 'General',
        question: 'Has the school conducted a formal curriculum audit with DEI in mind in the last 12 months?',
        type: 'binary',
        weight: 3
    },
    {
        number: 18,
        category: 'General',
        question: 'Are Indigenous histories and cultures included in the curriculum?',
        type: 'binary',
        weight: 3
    },
    {
        number: 19,
        category: 'General',
        question: 'What percentage of history content taught relates to non-Western societies or events?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 20,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Black, African, or Afro-Caribbean backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 21,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from East Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 22,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from South Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 23,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Southeast Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 24,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Middle Eastern or North African (MENA) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 25,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Hispanic or Latino/a/x (e.g., Mexican, Colombian, Dominican) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 26,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Indigenous or Native (e.g., Native American, Ainu, Sámi, Aboriginal, Māori) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 27,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from Pacific Islander or Native Hawaiian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 28,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors from White or Caucasian (including European descent) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 29,
        category: 'General',
        question: 'What percentage of books taught in English Literature are written by female authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 30,
        category: 'General',
        question: 'What percentage of books taught in English Literature are written by male authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 31,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by non-binary, genderqueer, or gender nonconforming authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 32,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by transgender (of any gender identity) authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 33,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors with learning disabilities (e.g., dyslexia, dyscalculia, dysgraphia)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 34,
        category: 'General',
        question: `What percentage of books taught in English Literature are written by neurodivergent (e.g., autism, ADHD, Tourette's, etc.) authors?`,
        type: 'percentage',
        weight: 1
    },
    {
        number: 35,
        category: 'General',
        question:
            'What percentage of books taught in English Literature are written by authors with physical disabilities (e.g., mobility, vision, hearing impairments)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 36,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Black, African, or Afro-Caribbean backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 37,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from East Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 38,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from South Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 39,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Southeast Asian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 40,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Middle Eastern or North African (MENA) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 41,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Hispanic or Latino/a/x (e.g., Mexican, Colombian, Dominican) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 42,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Indigenous or Native (e.g., Native American, Ainu, Sámi, Aboriginal, Māori) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 43,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from Pacific Islander or Native Hawaiian backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 44,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors from White or Caucasian (including European descent) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 45,
        category: 'General',
        question: 'What percentage of books taught in Korean Literature are written by female authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 46,
        category: 'General',
        question: 'What percentage of books taught in Korean Literature are written by male authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 47,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by non-binary, genderqueer, or gender nonconforming authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 48,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by transgender (of any gender identity) authors?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 49,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors with learning disabilities (e.g., dyslexia, dyscalculia, dysgraphia)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 50,
        category: 'General',
        question: `What percentage of books taught in Korean Literature are written by neurodivergent (e.g., autism, ADHD, Tourette's, etc.) authors?`,
        type: 'percentage',
        weight: 1
    },
    {
        number: 51,
        category: 'General',
        question:
            'What percentage of books taught in Korean Literature are written by authors with physical disabilities (e.g., mobility, vision, hearing impairments)?',
        type: 'percentage',
        weight: 1
    }
];

export default function CurriculumCalculator() {
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    const handleChange = (number: number, value: string) => {
        setResponses((prev) => ({ ...prev, [number]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;
        let totalWeight = 0;

        curriculumQuestions.forEach((q) => {
            const rawValue = responses[q.number];
            let score = 0;

            if (q.type === 'binary') {
                score = (rawValue?.toLowerCase() === 'yes' ? 1 : 0) * q.weight;
            } else if (q.type === 'percentage') {
                const value = parseFloat(rawValue) || 0;
                score = (value / 100) * q.weight;
            }

            totalScore += score;
            totalWeight += q.weight;
        });

        const average = totalScore / totalWeight;
        setFinalScore(parseFloat(average.toFixed(3)));
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow">
            {/* <h1 className="text-2xl font-bold mb-6">📚 Curriculum Survey 점수 계산기</h1> */}
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
                    {curriculumQuestions.map((q) => (
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
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                ) : (
                                    <input
                                        type="number"
                                        value={responses[q.number] || ''}
                                        onChange={(e) => handleChange(q.number, e.target.value)}
                                        className="border rounded p-1 w-28"
                                    />
                                )}
                            </td>
                            <td className="border px-2 py-1"> {q.type}</td>
                            <td className="border px-2 py-1"> {q.weight}</td>
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
