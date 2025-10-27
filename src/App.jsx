import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
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
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" }).then(() => {
      setArmy(army.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
      if (selectedBot?.id === bot.id) setSelectedBot(null);
    });
  }

  const sortedBots = [...bots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div className="App">
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} handleDelete={handleDelete} />

      <SortBar onSortChange={setSortBy} />

      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBack={() => setSelectedBot(null)} addToArmy={addToArmy} />
      ) : (
        <BotCollection bots={sortedBots} addToArmy={addToArmy} selectBot={setSelectedBot} />
      )}
    </div>
  );
}

export default App;