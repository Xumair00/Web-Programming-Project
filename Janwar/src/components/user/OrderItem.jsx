import styled from "styled-components";
import PropTypes from "prop-types";
import { currencyFormat } from "../../utils/helper";
import { BaseLinkGreen } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const OrderItemWrapper = styled.div`
  margin: 30px 0;
  border-bottom: 1px solid ${defaultTheme.color_anti_flash_white};

  .order-item-title {
    margin-bottom: 12px;
  }

  .order-item-details {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px 32px;
    border-radius: 8px;

    @media (max-width: ${breakpoints.sm}) {
      padding: 20px 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      padding: 12px 16px;
    }
  }

  .order-info-group {
    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }
  }

  .order-info-item {
    width: 50%;

    span {
      &:nth-child(2) {
        margin-left: 4px;
      }
    }

    &:nth-child(even) {
      text-align: right;
      @media (max-width: ${breakpoints.lg}) {
        text-align: left;
      }
    }

    @media (max-width: ${breakpoints.sm}) {
      width: 100%;
      margin: 2px 0;
    }
  }

  .order-overview {
    margin: 28px 0;
    gap: 12px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 20px 0;
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }

    &-img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
    }

    &-content {
      grid-template-columns: 100px auto;
      gap: 18px;
    }

    &-info {
      ul {
        span {
          &:nth-child(2) {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;

const OrderItem = ({ order }) => {
  return (
    <OrderItemWrapper>
      <div className="order-item-details">
        <h3 className="text-x order-item-title">Order no: {order._id}</h3>
        <div className="order-info-group flex flex-wrap">
          <div className="order-info-item">
            <span className="text-gray font-semibold">Order Date:</span>
            <span className="text-silver">{order.timestamp}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Payment Method:</span>
            <span className="text-silver">{order.paymentMethod}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">
              Price:
            </span>
            <span className="text-silver">{order.price}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Pet Type:</span>
            <span className="text-silver">{order.pet_type}</span>
          </div>
        </div>
      </div>
      <div className="order-overview flex justify-between">
        <div className="order-overview-content grid">
          <div className="order-overview-img">
            <img
              src={order.images}
              alt=""
              className="object-fit-cover"
            />
          </div>
          <div className="order-overview-info">
            <h4 className="text-xl">{order.title}</h4>
            <ul>
              <li className="font-semibold text-base">
                <span>Location</span>
                <span className="text-silver">{order.location}</span>
              </li>
              <li className="font-semibold text-base">
                <span>Description:</span>
                <span className="text-silver">{order.description}</span>
              </li>
              <li className="font-semibold text-base">
                <span>Price:</span>
                <span className="text-silver">
                  {order.price}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </OrderItemWrapper>
  );
};

export default OrderItem;

OrderItem.propTypes = {
  order: PropTypes.object,
};
