import React from 'react';

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
];

export const TrainerDashboard: React.FC = () => {
  return (
    <div className="trainer-shell">
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Дашборд</h1>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {['Добавлено на ОУ', 'Передано на стажировку', 'Завершили обучение'].map(
          title => (
            <div key={title} className="trainer-main-card" style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: '#6b7280', marginBottom: 4 }}>
                {title}
              </div>
              <div style={{ fontSize: 24, fontWeight: 700 }}>—</div>
              <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>
                Здесь будет KPI
              </div>
            </div>
          )
        )}
      </div>

      <div className="trainer-main-card" style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 12 }}>
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
              <th style={{ padding: '8px 4px' }}>Готовность</th>
              <th style={{ padding: '8px 4px' }}>Супервайзер</th>
              <th style={{ padding: '8px 4px' }}>Статус</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map(s => (
              <tr key={s.id} style={{ borderTop: '1px solid #e5e7eb' }}>
                <td style={{ padding: '10px 4px', color: '#3b82f6' }}>
                  {s.region}
                </td>
                <td style={{ padding: '10px 4px' }}>{s.name}</td>
                <td style={{ padding: '10px 4px' }}>
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
    </div>
  );
};