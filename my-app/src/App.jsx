//import type { Component } from 'solid-js';
import { createSignal } from "solid-js";


const [date, setDate] = createSignal(new Date());
console.log('year:' + date().getFullYear());

let newDate = date();
newDate.setFullYear(9999);
console.log(newDate);

//console.log('date:' + (date().setDate(1000000));

const [count, setCount] = createSignal(10);
console.log(count());

const App = () => {
  return (
    <div>
      <header>
        <h3>Cosmic Clock</h3>
      </header>
     

      <div>Date: <input type="date" value="2020-12-16" onInput={e => { setDate(Date.parse(e.target.value)); console.log(date().toDateString()) }} /></div>
      
      

      <div>Number: <input type="number" value={count()} onInput={e => setCount(count() + 1)} /></div>
      <div>{count}</div>

      <button>Click</button>
    </div>
  );
};

export default App;
