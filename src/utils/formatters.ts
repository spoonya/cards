export const formatNumber = (num: number): string => {
  return num.toLocaleString("ru-RU", { minimumFractionDigits: 0 });
};

export const formatDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const days = Math.floor(seconds / 86400);

  if (days > 0) {
    return `${days} ${days === 1 ? "день" : "дней"}`;
  }

  return `${hours} ${hours === 1 ? "час" : "часов"}`;
};

export const formatObject = (obj: {
  name: string;
  city: string;
  street: string;
}): string => {
  return `${obj.name}, ${obj.city}, ${obj.street}`;
};
