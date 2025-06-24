import { useState } from 'react';
import './App.css';
import CurriculumCalculator from './components/CurriculumCalculator';
import ExtracurricularCalculator from './components/ExtracurricularCalculator';
import LeadershipCalculator from './components/LeadershipCalculator';
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
                    Student Demographics
                </button>
                <button
                    onClick={() => setActiveTab('staff')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'staff' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Staff Demographics
                </button>
                <button
                    onClick={() => setActiveTab('leadership')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'leadership' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    School Leadership Demographics
                </button>
                <button
                    onClick={() => setActiveTab('policy')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'policy' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Policies and Governance
                </button>
                <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'curriculum' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Curriculum and Library
                </button>
                <button
                    onClick={() => setActiveTab('extra')}
                    className={`px-4 py-2 rounded ${
                        activeTab === 'extra' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                    }`}>
                    Extracurricular Activities
                </button>
            </div>

            {/* 탭 내용 */}
            <div>
                {activeTab === 'student' && <StudentCalculator />}
                {activeTab === 'staff' && <StaffCalculator />}
                {activeTab === 'leadership' && <LeadershipCalculator />}
                {activeTab === 'policy' && <PolicyCalculator />}
                {activeTab === 'curriculum' && <CurriculumCalculator />}
                {activeTab === 'extra' && <ExtracurricularCalculator />}
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
