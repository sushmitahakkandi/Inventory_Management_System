import { FiPackage, FiPlus, FiAlertTriangle } from "react-icons/fi";

const Navbar = ({ onAddClick, lowStockCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FiPackage className="navbar-icon" />
        <h1>Inventory Manager</h1>
      </div>
      <div className="navbar-actions">
        {lowStockCount > 0 && (
          <div className="low-stock-badge" title="Low stock items">
            <FiAlertTriangle />
            <span>{lowStockCount} Low Stock</span>
          </div>
        )}
        <button className="btn btn-primary" onClick={onAddClick}>
          <FiPlus />
          <span>Add Product</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
