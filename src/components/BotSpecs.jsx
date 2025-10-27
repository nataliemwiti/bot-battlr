import React from "react";

function BotSpecs({ bot, goBack, addToArmy }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} className="bot-img-large" />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>

      <div className="bot-specs-actions">
        <button onClick={goBack}>Back</button>
        <button onClick={() => addToArmy(bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;