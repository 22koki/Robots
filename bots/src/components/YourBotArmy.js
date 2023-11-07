import React from "react";
import BotCard from "./BotCard";
import "./YourBotArmy.css"; // Import the CSS file

function YourBotArmy({ army, onDischarge }) {
  return (
    <div className="your-bot-army">
    {army.map((bot) => (
      <BotCard key={bot.id} bot={bot} onDischarge={onDischarge} /> // prop drilling
    ))}
    
    </div>
  );
}

export default YourBotArmy;
