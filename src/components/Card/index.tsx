import styles from "./card.module.scss";
import { Appeal, AppealStatus, AppealStatusType } from "../../types";
import {
  formatDateTime,
  formatDuration,
  formatNumber,
  formatObject,
} from "../../utils";
import React from "react";

interface CardProps {
  data: Appeal;
}

export function Card({ data }: CardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleToggleText = () => setIsExpanded((prev) => !prev);

  const formattedHeader = `№ ${formatNumber(data.number)} ${
    AppealStatus[data.status]
  }`;

  const statusStyles: Record<AppealStatusType, string> = {
    "in-progress": styles.inProgress,
    overdue: styles.overdue,
    feedback: styles.feedback,
    completed: styles.completed,
  };

  return (
    <div className={styles.root}>
      <header className={`${styles.header} ${statusStyles[data.status]}`}>
        <span>{formattedHeader}</span>
        {data.isTechnological && <span className={styles.techIcon}>⚙️</span>}
      </header>
      <div className={styles.content}>
        <div>
          <strong>Создана:</strong> {formatDateTime(data.createdAt)}
          {data.duration && <span> ({formatDuration(data.duration)})</span>}
        </div>
        {data.controlDate && !data.completionDate && (
          <div>
            <strong>Контроль:</strong> {formatDateTime(data.controlDate)}
          </div>
        )}
        {data.completionDate && (
          <div>
            <strong>Выполнена:</strong> {formatDateTime(data.completionDate)}
          </div>
        )}
        <div>
          <strong>Система:</strong> {`${data.system} | ${data.type}`}
        </div>
        <div>
          <strong>Объект:</strong> {formatObject(data.object)}
        </div>
        <div className={styles.textBlock}>
          <p
            className={isExpanded ? styles.expandedText : styles.collapsedText}
          >
            {data.text}
          </p>
          <button
            className={styles.toggleTextButton}
            onClick={handleToggleText}
          >
            {isExpanded ? "Свернуть" : "▾ Читать далее"}
          </button>
        </div>
      </div>
    </div>
  );
}
