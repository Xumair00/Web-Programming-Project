import OrderItem from "./OrderItem";
import PropTypes from "prop-types";

const OrderItemList = ({ orders }) => {
  console.log('Ads:', orders.length);
  if (!orders || orders.length === 0) {
    return <p>No Orders available.</p>;
  }
  return (
    <div>
      {orders?.map((order) => (
        <OrderItem key={order._id} order={order} />
      ))}
    </div>
  );
};

export default OrderItemList;

OrderItemList.propTypes = {
  orders: PropTypes.array,
};
