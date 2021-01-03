/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocalVersionProd = /* GraphQL */ `
  mutation CreateLocalVersionProd($input: CreateLocalVersionProdInput!) {
    createLocalVersionProd(input: $input) {
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
export const deleteLocalVersionProd = /* GraphQL */ `
  mutation DeleteLocalVersionProd($input: DeleteLocalVersionProdInput!) {
    deleteLocalVersionProd(input: $input) {
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
export const updateLocalVersionProd = /* GraphQL */ `
  mutation UpdateLocalVersionProd($input: UpdateLocalVersionProdInput!) {
    updateLocalVersionProd(input: $input) {
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
export const createPromotionProd = /* GraphQL */ `
  mutation CreatePromotionProd($input: CreatePromotionProdInput!) {
    createPromotionProd(input: $input) {
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
export const updatePromotionProd = /* GraphQL */ `
  mutation UpdatePromotionProd($input: UpdatePromotionProdInput!) {
    updatePromotionProd(input: $input) {
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
export const deletePromotionProd = /* GraphQL */ `
  mutation DeletePromotionProd($input: DeletePromotionProdInput!) {
    deletePromotionProd(input: $input) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport($input: CreateReportInput!) {
    createReport(input: $input) {
      id
      info
      postID
      type
    }
  }
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport($input: UpdateReportInput!) {
    updateReport(input: $input) {
      id
      info
      postID
      type
    }
  }
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport($input: DeleteReportInput!) {
    deleteReport(input: $input) {
      id
      info
      postID
      type
    }
  }
`;
