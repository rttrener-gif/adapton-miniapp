import { useEffect } from 'react';
import vkBridge from '@vkontakte/vk-bridge';

import { StudentHome } from './student/StudentHome';
import { TrainerDashboard } from './trainer/TrainerDashboard';

const App = () => {
  useEffect(() => {
    // VK-настройки применяем только если реально открыты внутри VK Mini App
    const params = new URLSearchParams(window.location.search);
    const isVk = params.has('vk_platform');

    if (isVk) {
      vkBridge
        .send('VKWebAppSetViewSettings', {
          status_bar_style: 'light',
          action_bar_color: '#5b2be0',
          navigation_bar_color: '#000000',
        })
        .catch(() => {
          console.warn('VKWebAppSetViewSettings failed');
        });
    }
  }, []);

  const params = new URLSearchParams(window.location.search);
  const isVk = params.has('vk_platform');

  /**
   * Роли:
   * - ВНУТРИ VK → всегда student
   * - СНАРУЖИ → читаем ?role=student | trainer (по умолчанию student)
   */
  const roleFromQuery = params.get('role') as 'student' | 'trainer' | null;
  const role: 'student' | 'trainer' = isVk
    ? 'student'
    : roleFromQuery || 'student';

  return (
    <div className="app-root">
      {role === 'student' ? <StudentHome /> : <TrainerDashboard />}
    </div>
  );
};

export default App;