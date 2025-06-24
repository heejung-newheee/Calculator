import { useState } from 'react';

interface Question {
    number: number;
    category: string;
    question: string;
    type: 'binary' | 'percentage';
    weight: number;
}

const studentOrgQuestions: Question[] = [
    {
        number: 1,
        category: 'General',
        question: 'Does the school have a student-led diversity council or equivalent group?',
        type: 'binary',
        weight: 2.5
    },
    {
        number: 2,
        category: 'General',
        question: 'Are students allowed to propose and create new cultural or identity-based clubs?',
        type: 'binary',
        weight: 2.5
    },
    {
        number: 3,
        category: 'General',
        question: 'Are there any LGBTQ+ student clubs currently active at the school?',
        type: 'binary',
        weight: 2.5
    },
    {
        number: 4,
        category: 'General',
        question:
            'Has the school invited at least one external speaker or guest from an underrepresented background in the past year?',
        type: 'binary',
        weight: 2
    },
    {
        number: 5,
        category: 'General',
        question: 'Does the school calendar include at least one event linked to a cultural or religious observance?',
        type: 'binary',
        weight: 2
    },
    {
        number: 6,
        category: 'General',
        question: 'Are interpreters or translated materials available for school events involving parents/families?',
        type: 'binary',
        weight: 2
    },
    {
        number: 7,
        category: 'General',
        question:
            'Has the school held any event involving community partners from racial or ethnic minority groups in the past year?',
        type: 'binary',
        weight: 2
    },
    {
        number: 8,
        category: 'General',
        question: 'Has the school hosted at least one multicultural or identity-based event in the past academic year?',
        type: 'binary',
        weight: 2
    },
    {
        number: 9,
        category: 'General',
        question:
            'How many languages do interpreters or translated materials available for school events involving parents/families cover?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 10,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from Black, African, or Afro-Caribbean backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 11,
        category: 'General',
        question: 'What percentage of student organisations are led by students from East Asian backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 12,
        category: 'General',
        question: 'What percentage of student organisations are led by students from South Asian backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 13,
        category: 'General',
        question: 'What percentage of student organisations are led by students from Southeast Asian backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 14,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from Middle Eastern or North African (MENA) backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 15,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from Hispanic or Latino/a/x (e.g., Mexican, Colombian, Dominican) backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 16,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from Indigenous or Native (e.g., Native American, Ainu, Sámi, Aboriginal, Māori) backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 17,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from Pacific Islander or Native Hawaiian backgrounds?',
        type: 'percentage',
        weight: 2
    },
    {
        number: 18,
        category: 'General',
        question:
            'What percentage of student organisations are led by students from White or Caucasian (including European descent) backgrounds?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 19,
        category: 'General',
        question: 'What percentage of student organisations are led by female students?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 20,
        category: 'General',
        question: 'What percentage of student organisations are led by male students?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 21,
        category: 'General',
        question:
            'What percentage of student organisations are led by non-binary, genderqueer, or gender nonconforming students?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 22,
        category: 'General',
        question: 'What percentage of student organisations are led by transgender (of any gender identity) students?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 23,
        category: 'General',
        question:
            'What percentage of student organisations are led by students with learning disabilities (e.g., dyslexia, dyscalculia, dysgraphia)?',
        type: 'percentage',
        weight: 1
    },
    {
        number: 24,
        category: 'General',
        question: `What percentage of student organisations are led by neurodivergent (e.g., autism, ADHD, Tourette's, etc.) students?`,
        type: 'percentage',
        weight: 1
    },
    {
        number: 25,
        category: 'General',
        question:
            'What percentage of student organisations are led by students with physical disabilities (e.g., mobility, vision, hearing impairments)?',
        type: 'percentage',
        weight: 1
    }
];

export default function ExtracurricularCalculator() {
    const [responses, setResponses] = useState<{ [key: number]: string }>({});
    const [finalScore, setFinalScore] = useState<number | null>(null);

    const handleChange = (number: number, value: string) => {
        setResponses((prev) => ({ ...prev, [number]: value }));
    };

    const calculateScore = () => {
        let totalScore = 0;
        let totalWeight = 0;

        studentOrgQuestions.forEach((q) => {
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
            {/* <h1 className="text-2xl font-bold mb-6">🎓 Student Organization Survey 점수 계산기</h1> */}
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
                    {studentOrgQuestions.map((q) => (
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
