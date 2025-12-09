import React from "react";
import "../styles.css";

export type BottomTab = "home" | "schedule" | "messages" | "files";

interface BottomNavProps {
  active: BottomTab;
  onChange: (tab: BottomTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ active, onChange }) => {
  const makeBtn = (tab: BottomTab, label: string, icon: string) => (
    <button
      key={tab}
      type="button"
      className={
        "bottom-nav-btn" + (active === tab ? " bottom-nav-btn--active" : "")
      }
      onClick={() => onChange(tab)}
    >
      <span className="bottom-nav-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="bottom-nav-label">{label}</span>
    </button>
  );

  return (
    <nav className="bottom-nav">
      {makeBtn("home", "Домой", "🏠")}
      {makeBtn("schedule", "Расписание", "📅")}
      {makeBtn("messages", "Сообщения", "✉️")}
      {makeBtn("files", "Файлы", "📎")}
    </nav>
  );
};