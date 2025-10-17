import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} className="bot-img" />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>
        Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
      </p>
      {handleDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            handleDelete(bot);
          }}
          className="delete-btn"
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;