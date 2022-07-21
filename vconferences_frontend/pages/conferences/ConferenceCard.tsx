import { FC } from "react";

import styles from "../../styles/Home.module.scss";

type Props = {
  talk: ListTalk;
};

const TalkCard: FC<Props> = ({ talk }) => (
  <div className={styles["talk-card"]}>
    <h1>{talk.title}</h1>
    <p>{talk.abstract}</p>
    <h2>About the speaker</h2>
    <h5>
      Speaker: {talk.speaker.name} - {talk.speaker.email}
    </h5>
    <span>{talk.speaker.bio}</span>
    <h1>TODO: login/logout, color palette, searchbar, responsive on cards</h1>
  </div>
);

export default TalkCard;
