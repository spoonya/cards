import React from "react";
import styles from "./card.module.scss";
import { Appeal, AppealStatus, AppealStatusType } from "../../types";
import {
  formatDateTime,
  formatDuration,
  formatNumber,
  formatObject,
} from "../../utils";

interface CardProps {
  data: Appeal;
}

export function Card({ data }: CardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggleText = () => setIsExpanded((prev) => !prev);

  const formattedAppealNumber = `№ ${formatNumber(data.number)}`;

  const statusStyles: Record<AppealStatusType, string> = {
    "in-progress": styles.inProgress,
    overdue: styles.overdue,
    feedback: styles.feedback,
    completed: styles.completed,
  };

  return (
    <div className={styles.root}>
      <header className={`${styles.header}`}>
        <span className={`${statusStyles[data.status]} ${styles.number}`}>
          {formattedAppealNumber}
        </span>
        <span className={styles.status}>{AppealStatus[data.status]}</span>
        {data.isTechnological && <span className={styles.techIcon}>⚙️</span>}
      </header>
      <div className={styles.content}>
        <ul className="list-reset">
          <li className={styles.item}>
            <strong className={styles.label}>Создана:</strong>{" "}
            <span className={styles.value}>
              {formatDateTime(data.createdAt)}
            </span>
            &nbsp;
            {data.duration && (
              <span className={styles.value}>
                ({formatDuration(data.duration)})
              </span>
            )}
          </li>
          {data.controlDate && !data.completionDate && (
            <li className={styles.item}>
              <strong className={styles.label}>Контроль:</strong>{" "}
              <span className={styles.value}>
                {formatDateTime(data.controlDate)}
              </span>
            </li>
          )}
          {data.completionDate && (
            <li className={styles.item}>
              <strong className={styles.label}>Выполнена:</strong>{" "}
              <span className={styles.value}>
                {formatDateTime(data.completionDate)}
              </span>
            </li>
          )}
          <li className={styles.item}>
            <strong className={styles.label}>Система:</strong>{" "}
            <span className={styles.value}>
              {`${data.system} | ${data.type}`}
            </span>
          </li>
          <li className={styles.item}>
            <strong className={styles.label}>Объект:</strong>{" "}
            <span className={styles.value}>{formatObject(data.object)}</span>
          </li>
        </ul>
        <hr className={styles.hr} />
        <div
          className={`${isExpanded ? styles.expanded : styles.collapsed} ${
            styles.description
          }`}
        >
          <p>{data.text}</p>
        </div>
        <button
          className={`${styles.toggleTextButton} ${
            isExpanded ? styles.active : ""
          }`}
          onClick={handleToggleText}
        >
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 16l-6-6h12z" />
          </svg>
          {isExpanded ? "Свернуть" : " Читать далее"}
        </button>
      </div>
    </div>
  );
}
