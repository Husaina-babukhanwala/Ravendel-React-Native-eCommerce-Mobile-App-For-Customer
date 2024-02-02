import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    products {
      data {
        _id
        name
        categoryId {
          id
          name
          __typename
        }
        rating
        url
        sku
        description
        quantity
        pricing
        feature_image
        gallery_image
        meta
        shipping
        taxClass
        status
        featured_product
        product_type
        custom_field
        attribute
        attribute_master {
          id
          name
          attribute_values
          createdAt
          updatedAt
        }
        date
        updated
        short_description
        __typename
      }
      message {
        success
        message
        __typename
      }
      __typename
    }
  }
`;

const GET_PRODUCT = gql`
  query ($url: String!) {
    productbyurl(url: $url) {
      data {
        _id
        rating
        name
        url
        sku
        description
        quantity
        pricing
        feature_image
        brand {
          id
          name
        }
        gallery_image
        meta
        shipping
        taxClass
        status
        featured_product
        product_type
        custom_field
        date
        updated
        attribute
        attribute_master {
          id
          name
          attribute_values
          createdAt
          updatedAt
        }
        categoryId {
          id
          name
          __typename
        }
        variation_master {
          id
          productId
          combination
          quantity
          sku
          image
          pricing
          createdAt
          updatedAt
        }
        short_description
        variant
        __typename
      }
      message {
        message
        success
        __typename
      }
      __typename
    }
  }
`;

const GET_CATEGORIES = gql`
  query {
    productCategories {
      data {
        id
        name
        parentId
        date
        updated
        url
        image
      }
    }
  }
`;

const GET_ALL_CATEGORIES = gql`
  query ($fillter: customObject) {
    productCategoriesByFilter(filter: $fillter) {
      id
      name
      parentId
      url
      description
      image
      child_cat {
        id
        name
        parentId
      }
      meta
      date
      updated
    }
  }
`;

export const GET_FILTEREDPRODUCTS = gql`
  query ($filter: customObject) {
    filteredProducts(filter: $filter) {
      ...ProductTile
      __typename
    }
  }

  fragment ProductTile on Product {
    _id
    name
    url
    pricing
    quantity
    rating
    feature_image
    status
    brand {
      id
      name
      __typename
    }
    attribute_master {
      id
      name
      attribute_values
      createdAt
      updatedAt
    }
    categoryId {
      id
      name
      __typename
    }
    attribute

    shipping
    taxClass
    __typename
  }
`;

const GET_CAT_PRODUCTS = gql`
  query ($url: String!) {
    productsbycaturl(cat_url: $url) {
      data {
        id
        name
        parentId
        url
        description
        image
        meta
        date
        updated
        products {
          _id
          name
          url
          sku
          description
          quantity
          pricing
          feature_image
          gallery_image
          meta
          shipping
          tax_class
          status
          featured_product
          product_type
          custom_field
          date
          updated
          rating
          categoryId {
            id
            name
          }
        }
      }
    }
  }
`;

const GET_PRODUCT_REVIEWS = gql`
  query ($id: ID!) {
    productwisereview(productId: $id) {
      data {
        id
        title
        customerId {
          id
          firstName
        }
        productId {
          _id
          name
        }
        email
        review
        rating
        status
        date
        updated
      }
      message {
        message
        success
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation (
    $title: String
    $customer_id: String
    $product_id: String
    $email: String
    $review: String
    $rating: String
    $status: String
  ) {
    addReview(
      title: $title
      customer_id: $customer_id
      product_id: $product_id
      email: $email
      review: $review
      rating: $rating
      status: $status
    ) {
      message
      success
    }
  }
`;

const SALE_PRODUCT = gql`
  query {
    onSaleProducts {
      _id
      name
      feature_image
      pricing
      url
      categoryId {
        id
        name
      }
      quantity
      featured_product
      status
      variant
    }
  }
`;

const RECENT_PRODUCT = gql`
  query {
    recentproducts {
      _id
      name
      feature_image
      pricing
      url
      categoryId {
        id
        name
      }
      quantity
      featured_product
      status
      variant
    }
  }
`;

const GET_BRANDS_QUERY = gql`
  query {
    brands {
      data {
        id
        name
        url
        brand_logo
        meta {
          title
          description
          keywords
        }
        date
        updated
      }
      message {
        message
        success
      }
    }
  }
`;

const PRODUCT_BY_A_CATEGORY = gql`
  query ($id: ID!) {
    productsbycatid(cat_id: $id) {
      _id
      name
      feature_image
      pricing
      url
      categoryId {
        id
        name
      }
      quantity
      featured_product
      status
      variant
    }
  }
`;
const FEATURE_CATEGORY = gql`
  query {
    featureproducts {
      _id
      name
      feature_image
      pricing
      url
      categoryId {
        id
        name
      }
      quantity
      featured_product
      status
      variant
    }
  }
`;

const ATTRIBUTE_TILE = gql`
  fragment AttributeTile on productAttribute {
    id
    name
    values
    date
    updated
  }
`;
export const GET_ATTRIBUTES = gql`
  {
    productAttributes {
      data {
        ...AttributeTile
      }
      message {
        message
        success
      }
    }
  }
  ${ATTRIBUTE_TILE}
`;

export {
  GET_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCT,
  GET_CAT_PRODUCTS,
  GET_PRODUCT_REVIEWS,
  ADD_REVIEW,
  GET_ALL_CATEGORIES,
  SALE_PRODUCT,
  RECENT_PRODUCT,
  PRODUCT_BY_A_CATEGORY,
  FEATURE_CATEGORY,
  GET_BRANDS_QUERY,
};
