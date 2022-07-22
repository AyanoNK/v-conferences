import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useNavbarContext } from "../_app";
import TalkCard from "./ConferenceCard";

const Conferences = () => {
  const { searchValue } = useNavbarContext();
  const [talks, setTalks] = useState<ListTalk[]>([]);
  const router = useRouter();
  console.log(router.query);

  // useEffect(() => {
  //   // debounce change router query
  //   setTimeout(() => {}, 1000);
  //   router.push(`/conferences?search=${searchValue}`);
  // }, [searchValue]);
  useEffect(() => {
    // search the api

    async function fetchData() {
      await fetch(
        `${process.env.BACKEND_SERVER_HOST}/talk?search=${searchValue}`,
        {
          method: "GET",
          headers: new Headers({ "Content-type": "application/json" }),
          mode: "cors",
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      {talks.map((talk: ListTalk, index: number) => (
        <TalkCard talk={talk} key={index} />
      ))}
    </div>
  );
};

export default Conferences;
