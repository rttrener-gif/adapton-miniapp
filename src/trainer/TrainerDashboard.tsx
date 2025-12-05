import React, { useState } from 'react';

type StudentRow = {
  id: number;
  region: string;
  name: string;
  progress: number;
  startDate: string;
  readiness: number;
  supervisor: string;
  status: 'in_progress' | 'stopped';
};

const mockStudents: StudentRow[] = [
  {
    id: 1,
    region: 'Краснодар',
    name: 'Штырлова Юлия',
    progress: 84,
    startDate: '31/04/2022',
    readiness: 78.9,
    supervisor: 'Фёдоров Х.З.',
    status: 'stopped',
  },
  {
    id: 2,
    region: 'Москва',
    name: 'Кузина Татьяна',
    progress: 83.6,
    startDate: '31/04/2022',
    readiness: 65.9,
    supervisor: 'Игнатьев Б.З.',
    status: 'in_progress',
  },
  {
    id: 3,
    region: 'Санкт-Петербург',
    name: 'Петров Иван',
    progress: 83.4,
    startDate: '31/04/2022',
    readiness: 78.9,
    supervisor: 'Маринин Т.З.',
    status: 'in_progress',
  },
];

export const TrainerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'profile'>(
    'dashboard',
  );

  const renderDashboard = () => (
    <>
      {/* KPI-блоки */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {[
          'Добавлено на Онлайн-университет',
          'Передано на стажировку',
          'Завершили обучение',
        ].map((title) => (
          <div
            key={title}
            className="trainer-main-card"
            style={{ flex: 1, minHeight: 96 }}
          >
            <div
              style={{
                fontSize: 13,
                color: '#6b7280',
                marginBottom: 4,
                maxWidth: 220,
              }}
            >
              {title}
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>—</div>
            <div
              style={{
                fontSize: 12,
                color: '#9ca3af',
                marginTop: 4,
              }}
            >
              Здесь будет KPI
            </div>
          </div>
        ))}
      </div>

      {/* Таблица подопечных */}
      <div className="trainer-main-card" style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            marginBottom: 12,
          }}
        >
          Статистика по людям
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 13,
          }}
        >
          <thead>
            <tr style={{ textAlign: 'left', color: '#6b7280' }}>
              <th style={{ padding: '8px 4px' }}>РФ</th>
              <th style={{ padding: '8px 4px' }}>Имя</th>
              <th style={{ padding: '8px 4px' }}>Прогресс обучения</th>
              <th style={{ padding: '8px 4px' }}>Дата начала</th>
              <th style={{ padding: '8px 4px' }}>Готовность к стажировке</th>
              <th style={{ padding: '8px 4px' }}>Супервайзер</th>
              <th style={{ padding: '8px 4px' }}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((s) => (
              <tr
                key={s.id}
                style={{
                  borderTop: '1px solid #e5e7eb',
                  verticalAlign: 'top',
                }}
              >
                <td style={{ padding: '10px 4px', color: '#3b82f6' }}>
                  {s.region}
                </td>
                <td style={{ padding: '10px 4px' }}>{s.name}</td>

                <td style={{ padding: '10px 4px', minWidth: 140 }}>
                  {s.progress}%
                  <div
                    style={{
                      height: 4,
                      borderRadius: 999,
                      background: '#e5e7eb',
                      marginTop: 4,
                    }}
                  >
                    <div
                      style={{
                        width: `${s.progress}%`,
                        height: '100%',
                        borderRadius: 999,
                        background: '#22c55e',
                      }}
                    />
                  </div>
                </td>

                <td style={{ padding: '10px 4px' }}>{s.startDate}</td>
                <td style={{ padding: '10px 4px' }}>{s.readiness}%</td>
                <td style={{ padding: '10px 4px' }}>{s.supervisor}</td>

                <td style={{ padding: '10px 4px' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 999,
                      fontSize: 12,
                      background:
                        s.status === 'in_progress' ? '#dcfce7' : '#fee2e2',
                      color:
                        s.status === 'in_progress' ? '#15803d' : '#b91c1c',
                    }}
                  >
                    {s.status === 'in_progress' ? 'В процессе' : 'Остановился'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderProfile = () => (
    <div className="trainer-main-card" style={{ maxWidth: 680 }}>
      <h2 style={{ marginTop: 0, marginBottom: 16 }}>Мой профиль</h2>

      {/* Каналы продаж */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          Каналы продаж
        </div>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 4 }}>
          <input type="checkbox" defaultChecked /> GAP
        </label>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 4 }}>
          <input type="checkbox" /> ITM
        </label>
        <label style={{ display: 'block', fontSize: 13, marginBottom: 4 }}>
          <input type="checkbox" /> VTM
        </label>
      </div>

      {/* Регионы */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 6,
          }}
        >
          Регионы (РФ/РД), с которыми я работаю
        </div>
        <select
          multiple
          style={{
            width: '100%',
            minHeight: 140,
            fontSize: 13,
            borderRadius: 8,
            border: '1px solid #e5e7eb',
            padding: 8,
            outline: 'none',
          }}
        >
          <option>Краснодарский край</option>
          <option>Москва</option>
          <option>Санкт-Петербург</option>
          <option>Центральный федеральный округ</option>
          <option>Приволжский федеральный округ</option>
        </select>
        <div
          style={{
            fontSize: 11,
            color: '#6b7280',
            marginTop: 4,
          }}
        >
          Зажми Ctrl / Cmd, чтобы выбрать несколько регионов.
        </div>
      </div>

      <button
        type="button"
        style={{
          padding: '8px 16px',
          borderRadius: 999,
          border: 'none',
          background: '#7b3cff',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Сохранить настройки
      </button>
    </div>
  );

  return (
    <div className="trainer-shell">
      {/* Верхняя панель с заголовком и табами */}
      <div
        style={{
          marginBottom: 16,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Тренер</h1>

        <div style={{ display: 'flex', gap: 8 }}>
          <button
            type="button"
            onClick={() => setActiveTab('dashboard')}
            style={{
              padding: '6px 12px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              background:
                activeTab === 'dashboard' ? '#111827' : 'transparent',
              color: activeTab === 'dashboard' ? '#fff' : '#4b5563',
            }}
          >
            Дашборд
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            style={{
              padding: '6px 12px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              fontSize: 13,
              background: activeTab === 'profile' ? '#111827' : 'transparent',
              color: activeTab === 'profile' ? '#fff' : '#4b5563',
            }}
          >
            Мой профиль
          </button>
        </div>
      </div>

      {activeTab === 'dashboard' ? renderDashboard() : renderProfile()}
    </div>
  );
};