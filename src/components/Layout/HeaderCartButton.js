import {useContext, useEffect, useState} from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
    // This states handles if the cart button should be animated or not
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCTX = useContext(CartContext);

    const { items } = cartCTX;

    const numberOfCartItems = items.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0);

    // Create a constant that will be utilized by the side effect whenever an item is added
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    // Use side effects for the cart button animation every time an item is added to the cart
    useEffect(() => {
        if (items.length === 0) return;
        setBtnIsHighlighted(true);

        // Set timeout to remove the bump class from the button
        const timer = setTimeout(() => {setBtnIsHighlighted(false)}, 300);

        // Clean up useEffect
        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}