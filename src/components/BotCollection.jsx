import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addToArmy, selectBot }) {
  return (
    <div>
      <h2>All Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => selectBot(bot)}
            addToArmy={addToArmy}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;