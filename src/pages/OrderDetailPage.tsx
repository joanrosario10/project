"use client";

import type React from "react";
import { useParams, Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { products } from "../data/products";


const OrderDetailPage: React.FC = () => {
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
          to="/orders"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Orders</span>
        </Link>
      </div>
    );
  }

  const getStatusStep = (status: string) => {
    switch (status) {
      case "processing":
        return 1;
      case "shipped":
        return 2;
      case "delivered":
        return 3;
      default:
        return 0;
    }
  };

  const statusStep = getStatusStep(order.status);

  return (
    <div className="container mx-auto px-4 py-8">
      

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Order #{order.id}
              </h1>
              <p className="text-gray-600">
                Placed on {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-blue-600">
                ${order.totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Order Status Tracker */}
          <div className="mb-8">
            <div className="relative">
              <div className="flex justify-between mb-2">
                <div className="text-center">
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      statusStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    <Clock size={20} />
                  </div>
                  <p className="text-xs mt-1">Processing</p>
                </div>

                <div className="text-center">
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      statusStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    <Package size={20} />
                  </div>
                  <p className="text-xs mt-1">Packed</p>
                </div>

                <div className="text-center">
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      statusStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200"
                    }`}
                  >
                    <Truck size={20} />
                  </div>
                  <p className="text-xs mt-1">Shipped</p>
                </div>

                <div className="text-center">
                  <div
                    className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      statusStep >= 3
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-xs mt-1">Delivered</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
                <div
                  className="h-full bg-blue-600"
                  style={{ width: `${(statusStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => {
              const product = products.find((p) => p.id === item.productId);
              return product ? (
                <div
                  key={item.productId}
                  className="flex items-center border-b pb-4"
                >
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-semibold hover:text-blue-600"
                    >
                      {product.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              ) : null;
            })}
          </div>

          {/* Order Summary */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span>${(order.totalAmount * 0.92).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tax</span>
              <span>${(order.totalAmount * 0.08).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
              <span>Total</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/orders"
            className="bg-white border border-blue-600 text-blue-600 py-3 px-6 rounded-md hover:bg-blue-50 transition-colors text-center"
          >
            Back to Orders
          </Link>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;
