import { useState } from 'react';

export default function ScoreC() {
    const [yesno, setYesno] = useState('');
    const [percentage, setPercentage] = useState('');
    const [homeLanguages, setHomeLanguages] = useState('');
    const [monthsSinceReview, setMonthsSinceReview] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const calcScore = (value: any, type: any) => {
        if (type === 'yesno') {
            return value.toLowerCase() === 'yes' ? 1 : 0;
        }
        if (type === 'percentage') {
            return parseFloat(value) / 100;
        }
        if (type === 'homeLanguages') {
            const num = parseInt(value);
            if (num <= 1) return 0;
            if (num <= 3) return 0.2;
            if (num <= 5) return 0.4;
            if (num <= 7) return 0.6;
            if (num <= 9) return 0.8;
            return 1;
        }
        if (type === 'monthsSinceReview') {
            const num = parseInt(value);
            if (num <= 6) return 1.0;
            if (num <= 12) return 0.75;
            if (num <= 23) return 0.5;
            return 0;
        }
        return 0;
    };

    const handleCalculate = () => {
        const answers = [
            { value: yesno, type: 'yesno' },
            { value: percentage, type: 'percentage' },
            { value: homeLanguages, type: 'homeLanguages' },
            { value: monthsSinceReview, type: 'monthsSinceReview' }
        ];

        const totalScore = answers.reduce((sum, answer) => sum + calcScore(answer.value, answer.type), 0);

        const finalScore = totalScore / 267;

        setResult(finalScore.toFixed(3));
    };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-xl p-6 shadow space-y-6">
            <h1 className="text-2xl font-bold text-center">점수 계산기</h1>

            <div className="space-y-4">
                <div>
                    <label className="font-medium">예 / 아니요 (Yes / No)</label>
                    <input
                        value={yesno}
                        onChange={(e) => setYesno(e.target.value)}
                        placeholder="Yes 또는 No"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div>
                    <label className="font-medium">Percentage (0~100)</label>
                    <input
                        type="number"
                        value={percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        placeholder="예: 80"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div>
                    <label className="font-medium">Number of Home Languages</label>
                    <input
                        type="number"
                        value={homeLanguages}
                        onChange={(e) => setHomeLanguages(e.target.value)}
                        placeholder="예: 5"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div>
                    <label className="font-medium">Number of months since review</label>
                    <input
                        type="number"
                        value={monthsSinceReview}
                        onChange={(e) => setMonthsSinceReview(e.target.value)}
                        placeholder="예: 8"
                        className="border p-2 w-full rounded"
                    />
                </div>

                <button
                    onClick={handleCalculate}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    점수 계산하기
                </button>

                {result !== null && (
                    <div className="text-center text-xl font-bold text-green-600">최종 점수 : {result}</div>
                )}
            </div>
        </div>
    );
}
