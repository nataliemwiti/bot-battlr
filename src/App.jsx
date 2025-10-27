import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const addToArmy = (bot) => {
    const alreadyInArmy = army.find((b) => b.id === bot.id);
    if (!alreadyInArmy) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDelete = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error deleting bot:", error));
  };

  return (
    <div className="App">
      <YourBotArmy
        army={army}
        removeFromArmy={removeFromArmy}
        handleDelete={handleDelete}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;