export default function CartItem ({ thumbnail, title, price, quantity }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - $ {price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button>+</button>
      </footer>
    </li>
  )
}
