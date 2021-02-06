import React, { useState } from "react";
import drumState from "./utilities/drumState";
import styled from "styled-components";

function App() {
  const [state] = useState(drumState());
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => setPlaying(false), 200);
  };

  return (
    <>
      <Header>Drum Machine</Header>
      <PadContainer>
        {state.map((drum) => (
          <Pad
            onClick={(e) => e.target.id === drum.key && handlePlay()}
            playing={playing}
            key={drum.keyCode}
            id={drum.key}
          >
            {drum.key}
          </Pad>
        ))}
      </PadContainer>
    </>
  );
}

const Header = styled.h1`
  font-size: 3rem;
  color: #000;
`;

const PadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 22rem;
`;

const Pad = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 1rem;
  background-color: ${(props) =>
    props.playing ? props.theme.primary : "#f1f1f1"};
`;

export default App;
