import React from "react";
import PizzaModel from "../modal/pizza";

interface PizzaProps {
  pizzaObj: PizzaModel;
}
const PizzaItem = ({ pizzaObj }: PizzaProps) => {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
            <span>SOLD OUT</span>
          ) : (
            <span>{pizzaObj.price}</span>
          )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
};

export default PizzaItem;
