// EnlistedBotProfile.js

import React from "react";

function EnlistedBotProfile({ bot, onRelease }) {
  return (
    <div className="enlisted-bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      {/* Display other bot information as needed */}
      <button onClick={() => onRelease(bot)}>Release</button>
    </div>
  );
}

export default EnlistedBotProfile;
