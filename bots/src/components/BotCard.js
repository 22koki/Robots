import React, { useEffect } from "react";

function BotCard({ bot, onDischarge }) {
  // ...

  // // Use useEffect to make the DELETE request when the component is mounted
  // useEffect(() => {



  //   // Attach the event listener to the "Discharge" button
  //   // const dischargeButton = document.querySelector(".discharge-button");
  //   // if (dischargeButton) {
  //   //   dischargeButton.addEventListener("click", handleDischarge);
  //   // }

  //   // Clean up the event listener when the component is unmounted
  //   // return () => {
  //   //   if (dischargeButton) {
  //   //     dischargeButton.removeEventListener("click", handleDischarge);
  //   //   }
  //   // };
  // }, [bot, ]);


  const handleDischarge = () => {
    console.log("Discharge button clicked");

   
    // Make a DELETE request to the server
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type':'application/json'
    }
    })
    .then((res) => {

      console.log('Here is res',res)
     return res.json() } )
    .then((data) => {
      console.log(data);
      if (data) {
        console.log("Bot deleted successfully");
        onDischarge(bot)
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
      <div>
        {/* Add a class to the button for selecting it with querySelector */}
        <button className="discharge-button" onClick={handleDischarge}>Discharge (x)</button>
      </div>
    </div>
  );
}

export default BotCard;
