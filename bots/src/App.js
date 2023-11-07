import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
// import DeleteButton from "./components/DeleteButton";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    // Fetch the initial list of bots from the server
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  
  const dischargeBot = (bot) => {
    console.log("Discharging bot:", bot);
    const updatedArmy = army.filter((b) => {
      if(bot.id === b.id)return false
      return true
    });
    console.log("Updated army:", updatedArmy);
    setArmy(updatedArmy);
};

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onDischarge={dischargeBot}  /> {/* YourBotArmy comes first */}
      <BotCollection bots={bots} onEnlist={enlistBot} /> {/* Then, BotCollection */}
    </div>
  );

}

export default App;
