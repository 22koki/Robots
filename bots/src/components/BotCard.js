import React from "react";

function BotCard({ bot, onDischarge }) {
  const handleDischarge = () => {
    // Make a DELETE request to remove the bot from the backend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          // If the DELETE request is successful (status 204), remove the bot from the frontend state
          onDischarge(bot);
        } else {
          console.error("Failed to delete the bot.");
        }
      })
      .catch((error) => {
        console.error("Error during bot deletion:", error);
      });
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      {/* Display other bot information as needed */}
      <button onClick={handleDischarge}>Discharge (x)</button>
    </div>
  );
}

export default BotCard;
