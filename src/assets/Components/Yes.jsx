
import confetti from "https://esm.run/canvas-confetti@1";

export default function Yes() {
  function onClick() {
    confetti({
      particleCount: 900,
      spread: 360
    });
    

   
  }

  return (
    
    <button className="yes" onClick={onClick}>
        Yess!!
    </button>
  )
}


