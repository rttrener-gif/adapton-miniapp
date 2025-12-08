import React from "react";
import "../styles.css";

type TaskStatus = "not_done" | "done_student" | "done_ou";

interface TaskCardProps {
  title: string;
  duration: string;
  status: TaskStatus;
  onClick?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  title,
  duration,
  status,
  onClick,
}) => {
  const isDoneByStudent = status === "done_student" || status === "done_ou";
  const isDoneByOu = status === "done_ou";

  return (
    <button
      type="button"
      className="task-card"
      onClick={onClick}
    >
      <div className="task-left">
        <div className="task-circle">
          {isDoneByStudent && <span className="task-check">✓</span>}
        </div>
        <div className="task-text">
          <div className="task-title">{title}</div>
          <div className="task-subtitle">{duration}</div>
        </div>
      </div>

      <div className="task-right">
        {/* две «точки» (как две галочки): левая — отметка ученика, правая — по данным ОУ */}
        <div className="task-double-check">
          <span className={isDoneByStudent ? "dot done" : "dot"} />
          <span className={isDoneByOu ? "dot done" : "dot"} />
        </div>
      </div>
    </button>
  );
};