import { useState } from 'react';
import './App.css';
import PolicyCalculator from './components/PolicyCalculator';
import StaffCalculator from './components/StaffCalculator';
import StudentCalculator from './components/StudentCalculator';
function App() {
    const [activeTab, setActiveTab] = useState('student');

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">📊 등급 계산기</h1>

            {/* 탭 버튼 */}
            <div className="flex justify-center mb-6 space-x-4">
                <button
                    onClick={() => setActiveTab('student')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Student
                </button>
                <button
                    onClick={() => setActiveTab('staff')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'staff' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Staff
                </button>
                <button
                    onClick={() => setActiveTab('policy')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'policy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    policy
                </button>
            </div>

            {/* 탭 내용 */}
            <div>
                {activeTab === 'student' && <StudentCalculator />}
                {activeTab === 'staff' && <StaffCalculator />}
                {activeTab === 'policy' && <PolicyCalculator />}
            </div>
        </div>
    );
    //     <>
    //         <StudentCalculator />
    //         <ScoreC />
    //         <ChartComponents />
    //     </>
    // );
}

export default App;
