import { Card } from "..";
import { Appeal } from "../../types";
import styles from "./card.list.module.scss";

interface CardListProps {
  items: Appeal[];
}

export function CardList({ items }: CardListProps) {
  return (
    <div className={styles.root}>
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}
