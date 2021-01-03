/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocalVersionProd = /* GraphQL */ `
  query GetLocalVersionProd($id: ID!) {
    getLocalVersionProd(id: $id) {
      id
      address
      bio
      business_bio
      city
      email
      flags
      hours_of_oper
      lat
      lon
      name
      owner_bio
      phone_num
      photo
      photos
      streetAddress
      topProducts
      typeOfBusiness
      typeOfCuisine
      website
      workers
    }
  }
`;
export const listLocalVersionProds = /* GraphQL */ `
  query ListLocalVersionProds(
    $filter: TableLocalVersionProdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocalVersionProds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address
        bio
        business_bio
        city
        email
        flags
        hours_of_oper
        lat
        lon
        name
        owner_bio
        phone_num
        photo
        photos
        streetAddress
        topProducts
        typeOfBusiness
        typeOfCuisine
        website
        workers
      }
      nextToken
    }
  }
`;
export const getPromotionProd = /* GraphQL */ `
  query GetPromotionProd($businessID: ID!) {
    getPromotionProd(businessID: $businessID) {
      businessID
      content
      endDate
      id
      percent
      photo
      photos
      price
      rating
      startDate
      title
    }
  }
`;
export const listPromotionProds = /* GraphQL */ `
  query ListPromotionProds(
    $filter: TablePromotionProdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromotionProds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        businessID
        content
        endDate
        id
        percent
        photo
        photos
        price
        rating
        startDate
        title
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      businessID
      media
      upvote
      author
      stars
      lat
      long
      reported
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: TablePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        businessID
        media
        upvote
        author
        stars
        lat
        long
        reported
      }
      nextToken
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      info
      postID
      type
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: TableReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        info
        postID
        type
      }
      nextToken
    }
  }
`;
