import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, handleDelete }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => removeFromArmy(bot)}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;