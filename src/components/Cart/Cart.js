import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((element) => (
          <CartItem
            key={element.id}
            item={{
              id: element.id,
              title: element.name,
              quantity: element.quantity,
              total: element.totalPrice,
              price: element.price,
              description: element.description,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
