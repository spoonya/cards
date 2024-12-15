export enum AppealStatus {
  "in-progress" = "В работе",
  overdue = "Просрочено",
  feedback = "Есть отзыв",
  completed = "Выполнено",
}

export type AppealStatusType = keyof typeof AppealStatus;
