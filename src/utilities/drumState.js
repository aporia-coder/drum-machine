import React from "react";
import clap from "../assets/clap.wav";
import kick from "../assets/kick.wav";
import highHat from "../assets/highHat.wav";

const drumState = () => {
  return [
    {
      audio: clap,
      key: "W",
      keyCode: 87,
    },
    {
      audio: highHat,
      key: "A",
      keyCode: 65,
    },
    {
      audio: kick,
      key: "S",
      keyCode: 83,
    },
    // {
    //   audio: "#60e339",
    //   key: "D",
    //   keyCode: 68,
    // },
    // {
    //   audio: "#60e339",
    //   key: "Q",
    //   keyCode: 81,
    // },
    // {
    //   audio: "#60e339",
    //   key: "E",
    //   keyCode: 69,
    // },
  ];
};

export default drumState;
