import { CartItemContainer, ItemDetail } from "./cart-item.styles";
const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <span>{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};
export default CartItem;
