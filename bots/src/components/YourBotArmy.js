import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onDischarge }) {
  return (
    <div className="your-bot-army">
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot} onDischarge={onDischarge} />
      ))}
    </div>
  );
}

export default YourBotArmy;
