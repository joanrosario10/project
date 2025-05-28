"use client";

import type React from "react";
import { useParams, Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { products } from "../data/products";

const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { getOrderById } = useOrders();

  const order = orderId ? getOrderById(orderId) : undefined;

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Order Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The order you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been received and is
            being processed.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Order Details
              </h2>
              <p className="text-sm text-gray-500">Order #{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="font-semibold">
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="space-y-4">
              {order.items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return product ? (
                  <div
                    key={item.productId}
                    className="flex items-center space-x-4"
                  >
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>

            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-lg font-bold text-blue-600">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <Package size={24} className="text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">What's Next?</h3>
              <p className="text-blue-700 text-sm mb-2">
                We'll send you a confirmation email with tracking information
                once your order ships.
              </p>
              <p className="text-blue-700 text-sm">
                Estimated delivery: 3-5 business days
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/orders"
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            View All Orders
          </Link>
          <Link
            to="/products"
            className="flex-1 border border-blue-600 text-blue-600 py-3 px-6 rounded-md hover:bg-blue-50 transition-colors text-center flex items-center justify-center"
          >
            <span>Continue Shopping</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
