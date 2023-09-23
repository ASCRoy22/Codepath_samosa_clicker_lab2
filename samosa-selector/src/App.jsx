import './App.css';
import {useState} from 'react';
const App = () => {
const [count,setCount]=useState(0);
const [multiplier, setMultiplier] = useState(1);
const updateCount=()=>{
  setCount(count+multiplier);}
  const buyDoubleStuffed=()=>{(count>=10)?(setMultiplier(2),setCount(count-10)):null} //putting in null means it will do nothing if its not(else) somsa>=10 this way it wont go into negative too
  const buypartyPack=()=>{(count>=100)?(setMultiplier(5),setCount(count-100)):null}//instead of setting multiplier directly it is cumulative 1x2x5=10 etc buy it is buggy if you make it purchasable more than once
  const buyFullFeast=()=>{(count>=1000)?(setMultiplier(10),setCount(count-1000)):null}
  return (
    <div className="App">



      <div className="header">
        <h1>"Samosa Selector"</h1>
      <h2>Count: {count}</h2>
      <img className="samosa" onClick={updateCount} src="data:image/jpeg;base64,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"></img>
      </div>

      <div className="container">
        <div className="upgrade">
          <h3>Double stuffed👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack🎉</h3>
          <p>5x per click</p>
          <button onClick={buypartyPack}>100 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast👩🏽‍🍳</h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>

        </div>



    </div>
  )
}

export default App
