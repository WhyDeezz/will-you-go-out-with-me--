import No from "./assets/Components/No";
import Yes from "./assets/Components/Yes";

export default function App()
{
  return(
    <>
    <div className="catparent">
      <img src='./car.png' className="car"></img>
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