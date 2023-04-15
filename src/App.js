import React , {useState} from "react";

const App = () => {
  const defaultBg = "#8e44ad";
  const [bg, setBg] = useState(defaultBg);
  const [name, SetName] = useState("Click Me")

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    SetName("Ouch!! 😵‍💫😵‍💫")
  };
  
  const bgBack = () => {
    setBg(defaultBg);
    SetName("Ayyo!! 😠😠")
  };

  return (
    <>
      <div style={{backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
      </div>
    </>
  );
};

export default App;
