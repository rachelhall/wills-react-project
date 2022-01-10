import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import { useState } from "react";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

function App() {
  const [fishes, setFishes] = useState({});
  const [order, setOrder] = useState({});
  function addFish(fish) {
    // 1. Take a copy of the existing state
    // const fishes = { ...fishes };
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    setFishes(fishes);
  }
  function loadSampleFishes() {
    setFishes(sampleFishes);
  }
  function addToOrder(key) {
    // 1. Take a copy of state
    // const order = { ...order };
    console.log("Step 1: Working");

    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    console.log("Step 2: Working");
    // 3. Call setState to update our state object
    setOrder(order);
    console.log("Step 3: Working");
  }

  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(fishes).map((key) => {
            return (
              <Fish
                key={key}
                index={key}
                details={fishes[key]}
                addToOrder={addToOrder}
              />
            );
          })}
        </ul>
      </div>

      <Order />
      <Inventory addFish={addFish} loadSampleFishes={loadSampleFishes} />
    </div>
  );
}

export default App;
