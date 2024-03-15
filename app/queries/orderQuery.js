import gql from 'graphql-tag';

const ADD_TOCART = gql`
  mutation (
    $userId: ID!
    $productId: String
    $productTitle: String
    $productPrice: String
    $productImage: String
    $total: Float
    $qty: Int
    $attributes: customArray
    $variantId: String
    $productQuantity: Int
  ) {
    addToCart(
      total: $total
      userId: $userId
      productId: $productId
      productTitle: $productTitle
      productPrice: $productPrice
      productImage: $productImage
      qty: $qty
      attributes: $attributes
      productQuantity: $productQuantity
      variantId: $variantId
    ) {
      message
      success
    }
  }
`;
const ADD_CART = gql`
  mutation ($userId: ID, $products: [cartProduct]) {
    addCart(userId: $userId, products: $products) {
      message
      success
    }
  }
`;
const GET_ORDERS = gql`
  {
    orders {
      id
      user_id
      status
      shipping
      billing
      products
      date
      updated
    }
  }
`;

const GET_ORDER = gql`
  query ($id: ID!) {
    productCategory(id: $id) {
      id
      user_id
      status
      shipping
      billing
      products
      date
      updated
    }
  }
`;

const DELETE_ORDER = gql`
  mutation ($id: ID!) {
    deleteOrder(id: $id) {
      id
      user_id
      status
      shipping
      billing
      products
      date
      updated
    }
  }
`;

const UPDATE_ORDER = gql`
  mutation (
    $id: ID!
    $billing: customObject
    $shipping: customObject
    $status: String
  ) {
    updateOrder(
      id: $id
      billing: $billing
      shipping: $shipping
      status: $status
    ) {
      id
      user_id
      status
      shipping
      billing
      products
      date
      updated
    }
  }
`;
const DELETE_CART_PRODUCT = gql`
  mutation ($id: ID!, $product_id: ID!) {
    deleteCartProduct(id: $id, product_id: $product_id) {
      message
      success
    }
  }
`;

const DELETE_CART = gql`
  mutation DeleteCart($userId: ID!) {
    deleteCart(userId: $userId) {
      success
      message
    }
  }
`;

const GET_CART = gql`
  query ($id: ID!) {
    cartbyUser(userId: $id) {
      id
      userId
      status
      total
      cartItem
      availableItem
      unavailableItem
      date

      updated
    }
  }
`;

const CALCULATE_CART = gql`
  query ($id: ID!) {
    calculateCart(userId: $id) {
      id
      userId
      status
      cartItems
      date
      totalSummary

      updated
    }
  }
`;

const CALCULATE_CART_WITHOUT_LOGIN = gql`
  query ($cartItems: [calculateCartProducts]) {
    calculateCart(cartItems: $cartItems) {
      id
      userId
      status
      cartItems
      date
      totalSummary
      updated
    }
  }
`;

const CART = gql`
  query ($id: ID!) {
    cart(id: $id) {
      id
      user_id
      status
      total
      products
      date
      updated
    }
  }
`;
const UPDATE_CART = gql`
  mutation ($id: ID!, $products: [cartProduct]) {
    updateCart(id: $id, products: $products) {
      message
      success
    }
  }
`;

const CHANGE_QTY = gql`
  mutation ChangeQty($userId: ID!, $productId: ID!, $qty: Int!) {
    changeQty(userId: $userId, productId: $productId, qty: $qty) {
      success
      message
    }
  }
`;

// const APPLY_COUPON = gql`
//   query ($coupon_code: String, $cart: [cartProducts]) {
//     calculateCoupon(coupon_code: $coupon_code, cart: $cart) {
//       total_coupon
//       message
//     }
//   }
// `;

const APPLY_COUPON_CODE = gql`
  query (
    $userId: ID
    $cartItems: [calculateCartProducts]
    $couponCode: String!
  ) {
    calculateCoupon(
      couponCode: $couponCode
      cartItems: $cartItems
      userId: $userId
    ) {
      message
      success
      id
      userId
      status
      cartItems
      date
      totalSummary
      couponCard
      updated
    }
  }
`;

const ADD_CHECKOUT = gql`
  mutation ($user_id: ID, $products: [checkoutProduct]) {
    addCheckout(user_id: $user_id, products: $products) {
      id
      user_id
      shipping
      payment
      products
      status
      date
      updated
    }
  }
`;
const ORDER_HISTORY = gql`
  query ($id: ID!) {
    orderbyUser(userId: $id) {
      data {
        billing
        userId
        date
        couponCode
        discountAmount
        grandTotal
        id
        products
        shipping
        shippingAmount
        shippingStatus
        paymentStatus
        cartTotal
        taxAmount
        discountGrandTotal

        updated
      }
      message {
        message
        success
      }
    }
  }
`;

const CHECK_ZIPCODE = gql`
  query ($zipcode: String!) {
    checkZipcode(zipcode: $zipcode) {
      message
      success
    }
  }
`;

const ADD_ORDER = gql`
  mutation (
    $userId: ID
    $billing: customObject
    $shipping: customObject
    $products: customArray
    $cartTotal: String
    $shippingAmount: String
    $taxAmount: String
    $discountAmount: String
    $grandTotal: String
    $couponCode: String
  ) {
    addOrder(
      userId: $userId
      shipping: $shipping
      billing: $billing
      products: $products
      cartTotal: $cartTotal
      shippingAmount: $shippingAmount
      taxAmount: $taxAmount
      discountAmount: $discountAmount
      grandTotal: $grandTotal
      couponCode: $couponCode
    ) {
      message
      success
    }
  }
`;
export {
  ADD_TOCART,
  ADD_CART,
  GET_ORDERS,
  GET_ORDER,
  DELETE_ORDER,
  DELETE_CART,
  UPDATE_ORDER,
  DELETE_CART_PRODUCT,
  GET_CART,
  UPDATE_CART,
  APPLY_COUPON_CODE,
  ADD_CHECKOUT,
  ORDER_HISTORY,
  ADD_ORDER,
  CART,
  CALCULATE_CART,
  CALCULATE_CART_WITHOUT_LOGIN,
  CHANGE_QTY,
  CHECK_ZIPCODE,
};
