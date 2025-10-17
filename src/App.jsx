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
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  function addToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  function handleDelete(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>

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