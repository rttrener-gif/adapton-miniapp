import React, { useMemo, useState } from "react";
import "../styles.css";
import { TaskCard } from "../components/TaskCard";
import { BottomNav, BottomTab } from "../components/BottomNav";

export type TaskStatus = "not_done" | "done_student" | "done_ou";

export type StudentTask = {
  id: string;
  title: string;
  duration: string;
  status: TaskStatus;
  ouUrl?: string;
  day: number; // 1..5
};

const tasks: StudentTask[] = [
  // День 1
  {
    id: "d1-reg-ou",
    day: 1,
    title: "Регистрация на Онлайн-университете",
    duration: "3 минуты",
    status: "not_done",
    ouUrl: "https://corpuniver.rt.ru",
  },
  {
    id: "d1-start-gap",
    day: 1,
    title: "Твой старт в ГАП",
    duration: "3 минуты",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7571413597929568936",
  },
  {
    id: "d1-welcome-b2c",
    day: 1,
    title: "Добро пожаловать в команду B2C",
    duration: "7 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7102912462002265625",
  },
  {
    id: "d1-home-internet",
    day: 1,
    title: "Домашний интернет от Ростелекома",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7103170620150908832",
  },
  {
    id: "d1-wink",
    day: 1,
    title: "Wink — территория развлечений",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7102912031257477550",
  },
  {
    id: "d1-sales-tech",
    day: 1,
    title: "Техника продаж",
    duration: "5 минут",
    status: "not_done",
    ouUrl:
      "https://corpuniver.rt.ru/view_doc.html?mode=course&object_id=7248964612188674398",
  },

  // День 2 — примерные задачи
  {
    id: "d2-meet-sv",
    day: 2,
    title: "Знакомство с супервайзером",
    duration: "15 минут",
    status: "not_done",
  },
  {
    id: "d2-script-base",
    day: 2,
    title: "Скрипты: базовая структура диалога",
    duration: "10 минут",
    status: "not_done",
  },

  // День 3
  {
    id: "d3-practice-shadow",
    day: 3,
    title: "Шедоуинг: наблюдение за опытным продавцом",
    duration: "30 минут",
    status: "not_done",
  },
  {
    id: "d3-quiz-products",
    day: 3,
    title: "Квиз по продуктовой линейке",
    duration: "10 минут",
    status: "not_done",
  },

  // День 4
  {
    id: "d4-roleplay",
    day: 4,
    title: "Ролевые игры по технике продаж",
    duration: "30 минут",
    status: "not_done",
  },

  // День 5
  {
    id: "d5-checkpoint",
    day: 5,
    title: "Контрольная точка с тренером",
    duration: "20 минут",
    status: "not_done",
  },
];

const days = [
  { day: 1, label: "1 день" },
  { day: 2, label: "2 день" },
  { day: 3, label: "3 день" },
  { day: 4, label: "4 день" },
  { day: 5, label: "5 день" },
];

type Practicum = {
  id: string;
  date: string;
  time: string;
  title: string;
  format: string;
  trainer: string;
};

const practicums: Practicum[] = [
  {
    id: "p1",
    date: "3 марта",
    time: "10:00–11:30",
    title: "Онлайн-практикум: Домашний интернет",
    format: "Онлайн",
    trainer: "Иванова А.",
  },
  {
    id: "p2",
    date: "4 марта",
    time: "15:00–16:30",
    title: "Онлайн-практикум: Wink",
    format: "Онлайн",
    trainer: "Петров Д.",
  },
  {
    id: "p3",
    date: "5 марта",
    time: "11:00–12:30",
    title: "Практикум по технике продаж",
    format: "Оффлайн / онлайн",
    trainer: "Сидорова Е.",
  },
];

export const StudentHome: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<BottomTab>("home");

  const progress = useMemo(() => {
    const total = tasks.length;
    const doneByOu = tasks.filter((t) => t.status === "done_ou").length;
    return Math.round((doneByOu / total) * 100);
  }, []);

  const tasksForDay = tasks.filter((t) => t.day === activeDay);

  const handleOpenTask = (task: StudentTask) => {
    if (!task.ouUrl) {
      // пока просто заглушка
      alert("Для этой задачи ссылка появится позже 🙂");
      return;
    }

    const ok = window.confirm(
      "Онлайн-университет открывается только:\n\n• в Яндекс.Браузере, или\n• в браузере с установленным сертификатом Минцифры.\n\nПродолжить переход?"
    );

    if (ok) {
      window.open(task.ouUrl, "_blank");
    }
  };

  // --- экраны вкладок ---

  const renderHome = () => (
    <>
      <header className="student-header">
        <div className="ou-logo-wrap">
          {/* если лого ещё не подлили, оставляем текстовый бейдж */}
          <div className="ou-badge">
            <span>онлайн университет</span>
            <span className="ou-b2c">B2C</span>
          </div>
        </div>

        <h1 className="student-title">Привет, Ирен 👋</h1>
        <p className="student-subtitle">Добро пожаловать в Ростелеком!</p>

        {/* Мини-календарь по дням */}
        <div className="student-calendar">
          {days.map((d) => (
            <button
              key={d.day}
              type="button"
              className={
                "calendar-pill" +
                (activeDay === d.day ? " calendar-pill--active" : "")
              }
              onClick={() => setActiveDay(d.day)}
            >
              <span className="calendar-pill-day">{d.day}</span>
              <span className="calendar-pill-label">день</span>
            </button>
          ))}
        </div>

        <div className="student-day-card">
          <div className="student-day-header">
            <span>
              {activeDay === 1
                ? "Первый день обучения"
                : `${activeDay}-й день обучения`}
            </span>
            <span className="student-day-time">Осталось 24 часа</span>
          </div>
          <div className="student-day-progress">
            <div
              className="student-day-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="student-main">
        <div className="student-section-header">
          <span>Задачи</span>
          <button className="student-link-button" type="button">
            Посмотреть все
          </button>
        </div>

        <div className="student-tasks-list">
          {tasksForDay.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              duration={task.duration}
              status={task.status}
              onClick={() => handleOpenTask(task)}
            />
          ))}
        </div>
      </main>
    </>
  );

  const renderSchedule = () => (
    <main className="student-main">
      <h2 className="student-section-title">Расписание практикумов</h2>
      <div className="schedule-list">
        {practicums.map((p) => (
          <div key={p.id} className="schedule-card">
            <div className="schedule-date-time">
              <span className="schedule-date">{p.date}</span>
              <span className="schedule-time">{p.time}</span>
            </div>
            <div className="schedule-title">{p.title}</div>
            <div className="schedule-meta">
              <span>{p.format}</span>
              <span>Тренер: {p.trainer}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );

  const renderMessages = () => (
    <main className="student-main">
      <h2 className="student-section-title">Сообщения</h2>
      <p className="placeholder-text">
        Здесь будут диалоги с тренером, рекрутером и супервайзером.
      </p>
    </main>
  );

  const renderFiles = () => (
    <main className="student-main">
      <h2 className="student-section-title">Файлы</h2>
      <p className="placeholder-text">
        Здесь будут памятки, ссылки и другие материалы.
      </p>
    </main>
  );

  let content: React.ReactNode;
  switch (activeTab) {
    case "schedule":
      content = renderSchedule();
      break;
    case "messages":
      content = renderMessages();
      break;
    case "files":
      content = renderFiles();
      break;
    case "home":
    default:
      content = renderHome();
  }

  return (
    <div className="student-root">
      {content}
      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export default StudentHome;