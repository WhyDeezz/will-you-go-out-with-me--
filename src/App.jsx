import No from "./assets/Components/No";
import Yes from "./assets/Components/Yes";
import car from "./assets/Components/car.png"

export default function App()
{
  return(
    <>
    <div className="catparent">
      <img src={car} className="car"></img>
    </div>
    <div className="parent">
      <h1 className="title">Will You goo out with me 🥺👉👈 ???!!</h1>
    </div>
    <div className="parent2">
      <Yes/>
      <No/>
    </div>
    </>
  )
}