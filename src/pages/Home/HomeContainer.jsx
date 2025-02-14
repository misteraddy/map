import React, { useEffect, useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function HomeContainer() {
  const navigation = useNavigate();
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");

  function handleClick() {
    navigation("/start");
  }

  function handleClick2() {
    navigation("/play", {
      state: { wordSelected: word, wordDescription: description },
    });
  }

  async function fetchWords() {
    const respose = await fetch(
      "https://json-server-vercel-kappa-seven.vercel.app/words"
    );
    const data = await respose.json();
    console.log(data);

    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(data[randomIndex]);
    setWord(data[randomIndex].wordValue);
    setDescription(data[randomIndex].wordCategory);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <Home
      handleClick={handleClick}
      handleClick2={handleClick2}
    />
  );
}

export default HomeContainer;
