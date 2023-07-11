import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
export const fetchCart = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch("https://react-http-78323-default-rtdb.firebaseio.com/cart.json");
      if (!response.ok) {
        throw new Error("Featching cart data failed !!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchRequest();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error !!",
          message: "Sending Cart failed !!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart ...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch("https://react-http-78323-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success !!",
          message: "Sending Cart Success !!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error !!",
          message: "Sending Cart failed !!",
        })
      );
    }
  };
};
