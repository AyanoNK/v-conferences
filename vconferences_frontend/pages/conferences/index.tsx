import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import instance from "../../axios";
import { useNavbarContext } from "../_app";
import TalkCard from "./ConferenceCard";

const Conferences = () => {
  const { searchValue } = useNavbarContext();
  const [talks, setTalks] = useState<ListTalk[]>([]);
  const [loading, isLoading] = useState(false);

  async function fetchData() {
    fetch(`/api/get_conferences_data?search=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setTalks(data));
  }

  useEffect(() => {
    isLoading(true);
    setTimeout(() => {
      fetchData();
      isLoading(false);
    }, 1500);
  }, [searchValue]);

  return (
    <div>
      {loading && <h3>Cargando...</h3>}
      {talks.length === 0 && !loading && <h3>No hay resultados</h3>}
      {talks.length > 0 &&
        talks.map((talk: ListTalk, index: number) => (
          <TalkCard talk={talk} key={index} />
        ))}
    </div>
  );
};

export default Conferences;
