
import confetti from "https://esm.run/canvas-confetti@1";

export default function Yes() {
  function onClick() {
    confetti({
      particleCount: 900,
      spread: 360
    });
    window.location.href = "mailto:vaithieshjsankar@gmail.com?subject=Proposal%20Accepted!&body=Yess!%20I%20do%20wanna%20go%20out%20with%20uuu%20💕";

   
  }

  return (
    
    <button className="yes" onClick={onClick}>
        Yess!!
    </button>
  )
}


