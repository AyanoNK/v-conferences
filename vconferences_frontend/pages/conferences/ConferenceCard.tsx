import { FC } from "react";

import styles from "../../styles/Home.module.scss";

type Props = {
  talk: ListTalk;
};

const TalkCard: FC<Props> = ({ talk }) => (
  <div className={styles["talk-card"]}>
    <h1>{talk.title}</h1>
    <p>{talk.abstract}</p>
  </div>
);

export default TalkCard;
