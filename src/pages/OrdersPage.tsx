import type React from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import { Package, Eye, Clock, Truck, CheckCircle } from "lucide-react";
import { products } from "../data/products";

const OrdersPage: React.FC = () => {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Package size={64} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No orders yet
        </h2>
        <p className="text-gray-500 mb-6">
          When you place orders, they will appear here
        </p>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          <span>Start Shopping</span>
        </Link>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="w-5 h-5" />;
      case "shipped":
        return <Truck className="w-5 h-5" />;
      case "delivered":
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "text-blue-600 bg-blue-100";
      case "shipped":
        return "text-orange-600 bg-orange-100";
      case "delivered":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div>
                <p className="text-sm text-gray-500">Order placed</p>
                <p className="font-semibold">
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
              </div>

              <div
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(
                  order.status
                )}`}
              >
                {getStatusIcon(order.status)}
                <span>{order.status}</span>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-semibold">${order.totalAmount.toFixed(2)}</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">Order #{order.id}</p>
                <Link
                  to={`/order/${order.id}`}
                  className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                >
                  <Eye size={16} />
                  <span>View Details</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {order.items.slice(0, 3).map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  return product ? (
                    <div
                      key={item.productId}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={product.images?.[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Link
                          to={`/product/${product.id}`}
                          className="font-semibold hover:text-blue-600 line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ) : null;
                })}
                {order.items.length > 3 && (
                  <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">
                      +{order.items.length - 3} more items
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  to={`/order/${order.id}`}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  View order details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
