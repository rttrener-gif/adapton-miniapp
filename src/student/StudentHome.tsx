import React, { useState } from 'react';
import { BottomNav } from '../components/BottomNav';
import { TaskCard } from '../components/TaskCard';
import type { Task } from '../components/TaskCard';

const studentTasks: StudentTask[] = [
  {
    id: "reg-ou",
    title: "Регистрация на Онлайн-университете",
    duration: "3 минуты",
    status: "not_done",
    ouUrl: "https://corpuniver.rt.ru",
  },
  {
    id: "start-gap",
    title: "Твой старт в ГАП",
    duration: "3 минуты",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7571413597929568936",
  },
  {
    id: "welcome-b2c",
    title: "Добро пожаловать в команду B2C",
    duration: "7 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7102912462002265625",
  },
  {
    id: "home-internet",
    title: "Домашний интернет от Ростелекома",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7103170620150908832",
  },
  {
    id: "wink",
    title: "Wink — территория развлечений",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7102912031257477550",
  },
  {
    id: "sales-tech",
    title: "Техника продаж",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7248964612188674398",
  },
];

export const StudentHome: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTab, setActiveTab] =
    useState<'home' | 'schedule' | 'messages' | 'files'>('home');

  const toggleStudentDone = (id: number) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, studentDone: !t.studentDone } : t
      )
    );
  };

  const renderContent = () => {
    if (activeTab === 'home') {
      return (
        <>
          {/* приветствие */}
          <div style={{ padding: '20px 20px 12px' }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
              Привет, Ирен 👋
            </div>
            <div style={{ fontSize: 13 }}>Добро пожаловать в Ростелеком!</div>
          </div>

          {/* дни обучения (заглушка) */}
          <div style={{ display: 'flex', gap: 8, padding: '0 20px 16px' }}>
            {['3 Сб', '4 Вс', '5 Пн', '6 Вт', '7 Ср', '8 Чт', '9 Пт'].map(
              (d, idx) => (
                <div
                  key={d}
                  style={{
                    flex: 1,
                    padding: '8px 4px',
                    borderRadius: 16,
                    textAlign: 'center',
                    background: idx === 0 ? '#fff' : 'rgba(255,255,255,0.14)',
                    color: idx === 0 ? '#ef4444' : '#f9fafb',
                    fontSize: 11,
                    fontWeight: idx === 0 ? 700 : 500,
                  }}
                >
                  {d}
                </div>
              )
            )}
          </div>

          {/* первый день обучения */}
          <div style={{ padding: '0 20px 16px' }}>
            <div className="card">
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#111827',
                  marginBottom: 6,
                }}
              >
                Первый день обучения
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 8 }}>
                Осталось 24 часа
              </div>
              <div
                style={{
                  height: 4,
                  borderRadius: 999,
                  background: '#e5e7eb',
                }}
              >
                <div
                  style={{
                    width: '40%',
                    height: '100%',
                    borderRadius: 999,
                    background:
                      'linear-gradient(90deg,#7b3cff,#ff8a3c)',
                  }}
                />
              </div>
            </div>
          </div>

          {/* задачи */}
          <div
            style={{
              padding: '0 20px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600 }}>Задачи</div>
            <div style={{ fontSize: 12, color: '#e5e7eb' }}>
              Посмотреть все
            </div>
          </div>

          <div
            style={{
              padding: '0 20px 16px',
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {tasks.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onToggleStudent={toggleStudentDone}
              />
            ))}
          </div>
        </>
      );
    }

    if (activeTab === 'schedule') {
      return (
        <div style={{ padding: 20 }}>
          <div className="card">Здесь будет расписание практикумов</div>
        </div>
      );
    }
    if (activeTab === 'messages') {
      return (
        <div style={{ padding: 20 }}>
          <div className="card">Здесь будут сообщения</div>
        </div>
      );
    }
    return (
      <div style={{ padding: 20 }}>
        <div className="card">Здесь будут файлы и памятки</div>
      </div>
    );
  };

  return (
    <div className="student-shell">
      <div
        style={{
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {renderContent()}
      </div>
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
};