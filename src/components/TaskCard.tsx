import React from 'react';

export type Task = {
  id: number;
  title: string;
  minutes: number;
  studentDone: boolean;
  ouDone: boolean;
};

type Props = {
  task: Task;
  onToggleStudent?: (id: number) => void;
};

export const TaskCard: React.FC<Props> = ({ task, onToggleStudent }) => {
  return (
    <div
      className="card"
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 12,
        paddingBlock: 12,
      }}
    >
      {/* слева круг-прогресс (для MVP просто обводка) */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '999px',
          border: '2px solid #7b3cff',
          marginRight: 12,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: '#111827',
            marginBottom: 2,
          }}
        >
          {task.title}
        </div>
        <div style={{ fontSize: 12, color: '#6b7280' }}>
          {task.minutes} минут
        </div>
      </div>

      {/* первая галочка – ученик */}
      <button
        onClick={() => onToggleStudent?.(task.id)}
        style={{
          width: 22,
          height: 22,
          borderRadius: '999px',
          border: '2px solid #d1d5db',
          marginRight: 8,
          background: task.studentDone ? '#22c55e' : 'transparent',
        }}
      />

      {/* вторая галочка – подтверждение ОУ */}
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '999px',
          border: '2px solid #d1d5db',
          background: task.ouDone ? '#22c55e' : 'transparent',
        }}
      />
    </div>
  );
};