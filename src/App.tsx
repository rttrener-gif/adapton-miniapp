import React from 'react';
import { StudentHome } from './student/StudentHome';
import { TrainerDashboard } from './trainer/TrainerDashboard';

export const App: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const role = (params.get('role') as 'student' | 'trainer') || 'student';

  return (
    <div className="app-root">
      {role === 'student' ? <StudentHome /> : <TrainerDashboard />}
    </div>
  );
};