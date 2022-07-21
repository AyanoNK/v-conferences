import { FC } from "react";
import instance from "../../axios";

type Props = {
  talks: Talk[];
};
const Conferences: FC<Props> = ({ talks }) => {
  return (
    <div>
      {talks.map((talk: Talk, index: number) => (
        <div key={index}>
          <h1>{talk.title}</h1>
          <p>{talk.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default Conferences;

export async function getServerSideProps() {
  const res = await instance.get("/talk/");
  return {
    props: {
      talks: res.data,
    },
  };
}
