import {useContext} from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import cartContext from "../../../store/cart-context";

export default function MealItem(props) {
    const cartCTX = useContext(cartContext);

    const price = `$${props.price.toFixed(2)}`;

    function addToCartHandler(amount) {
        cartCTX.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler}/>
        </div>

    </li>
}