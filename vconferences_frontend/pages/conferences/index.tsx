import { FC } from "react";
import instance from "../../axios";
import TalkCard from "./ConferenceCard";

type Props = {
  talks: ListTalk[];
};
const Conferences: FC<Props> = ({ talks }) => {
  return (
    <div>
      {talks.map((talk: ListTalk, index: number) => (
        <TalkCard talk={talk} key={index} />
      ))}
    </div>
  );
};

export default Conferences;

export async function getServerSideProps() {
  const response = {
    props: {
      talks: [],
    },
  };
  const res = await instance
    .get("/talk/")
    .then((res) => {
      response.props.talks = res.data;
      return response;
    })
    .catch(() => response);
  return res;
}
