import React, { useMemo } from "react";
import "../styles.css";
import ouLogo from "../assets/logo.svg";
import { TaskCard } from "../components/TaskCard";

export type StudentTask = {
  id: string;
  title: string;
  duration: string;
  status: "not_done" | "done_student" | "done_ou";
  ouUrl?: string;
};

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
  const progress = useMemo(() => {
    const total = studentTasks.length;
    const doneByOu = studentTasks.filter((t) => t.status === "done_ou").length;
    return Math.round((doneByOu / total) * 100);
  }, []);

  const handleOpenTask = (task: StudentTask) => {
    if (!task.ouUrl) return;

    const ok = window.confirm(
      "Онлайн-университет открывается только:\n\n• в Яндекс.Браузере, или\n• в браузере с установленным сертификатом Минцифры.\n\nПродолжить переход?"
    );

    if (ok) {
      window.open(task.ouUrl, "_blank");
    }
  };

  return (
    <div className="student-root">
      <header className="student-header">
        <div className="ou-badge">
          <span>онлайн университет</span>
          <span className="ou-b2c">B2C</span>
        </div>

        <h1 className="student-title">Привет, Ирен 👋</h1>
        <p className="student-subtitle">Добро пожаловать в Ростелеком!</p>

        <div className="student-day-card">
          <div className="student-day-header">
            <span>Первый день обучения</span>
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
          {studentTasks.map((task) => (
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
    </div>
  );
};

export default StudentHome;