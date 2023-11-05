import React from "react";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <ul>
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            <button onClick={() => onEnlist(bot)}>Add to Army</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
