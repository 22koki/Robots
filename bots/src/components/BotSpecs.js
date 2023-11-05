import React from "react";
import "./BotSpecs.css";
function BotSpecs({ bot, onEnlist }) {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
