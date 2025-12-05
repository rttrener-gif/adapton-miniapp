import React from 'react';

type Props = {
  active: 'home' | 'schedule' | 'messages' | 'files';
  onChange?: (tab: Props['active']) => void;
};

export const BottomNav: React.FC<Props> = ({ active, onChange }) => {
  const makeHandler = (tab: Props['active']) => () => onChange?.(tab);

  return (
    <div className="bottom-nav">
      <button
        aria-label="Дом"
        style={{ opacity: active === 'home' ? 1 : 0.5 }}
        onClick={makeHandler('home')}
      >
        📝
      </button>
      <button
        aria-label="Таблица"
        style={{ opacity: active === 'schedule' ? 1 : 0.5 }}
        onClick={makeHandler('schedule')}
      >
        📅
      </button>
      <button
        aria-label="Сообщения"
        style={{ opacity: active === 'messages' ? 1 : 0.5 }}
        onClick={makeHandler('messages')}
      >
        📩
      </button>
      <button
        aria-label="Файлы"
        style={{ opacity: active === 'files' ? 1 : 0.5 }}
        onClick={makeHandler('files')}
      >
        📎
      </button>
    </div>
  );
};