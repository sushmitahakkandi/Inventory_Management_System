import { FiEdit2, FiTrash2, FiAlertTriangle } from "react-icons/fi";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const isLowStock = product.quantity <= product.minStock;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <tr className={`product-row ${isLowStock ? "low-stock" : ""}`}>
      <td className="product-name">
        <span>{product.name}</span>
        {isLowStock && (
          <span className="low-stock-icon" title="Low stock!">
            <FiAlertTriangle />
          </span>
        )}
      </td>
      <td>
        <span className="category-badge">{product.category}</span>
      </td>
      <td className="price-cell">{formatPrice(product.price)}</td>
      <td className={`quantity-cell ${isLowStock ? "quantity-low" : "quantity-ok"}`}>
        {product.quantity}
      </td>
      <td className="minstock-cell">{product.minStock}</td>
      <td className="date-cell">{formatDate(product.createdAt)}</td>
      <td className="actions-cell">
        <button
          className="btn-icon btn-edit"
          onClick={() => onEdit(product)}
          title="Edit product"
        >
          <FiEdit2 />
        </button>
        <button
          className="btn-icon btn-delete"
          onClick={() => onDelete(product._id)}
          title="Delete product"
        >
          <FiTrash2 />
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
