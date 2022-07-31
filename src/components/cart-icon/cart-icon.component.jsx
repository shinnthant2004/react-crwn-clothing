import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/carts/cart.selector";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
