/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocalVersionProd = /* GraphQL */ `
  subscription OnCreateLocalVersionProd(
    $flags: String
    $id: ID
    $name: String
    $typeOfBusiness: String
    $workers: Int
  ) {
    onCreateLocalVersionProd(
      flags: $flags
      id: $id
      name: $name
      typeOfBusiness: $typeOfBusiness
      workers: $workers
    ) {
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
export const onDeleteLocalVersionProd = /* GraphQL */ `
  subscription OnDeleteLocalVersionProd(
    $flags: String
    $id: ID
    $name: String
    $typeOfBusiness: String
    $workers: Int
  ) {
    onDeleteLocalVersionProd(
      flags: $flags
      id: $id
      name: $name
      typeOfBusiness: $typeOfBusiness
      workers: $workers
    ) {
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
export const onUpdateLocalVersionProd = /* GraphQL */ `
  subscription OnUpdateLocalVersionProd(
    $flags: String
    $id: ID
    $name: String
    $typeOfBusiness: String
    $workers: Int
  ) {
    onUpdateLocalVersionProd(
      flags: $flags
      id: $id
      name: $name
      typeOfBusiness: $typeOfBusiness
      workers: $workers
    ) {
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
export const onCreatePromotionProd = /* GraphQL */ `
  subscription OnCreatePromotionProd(
    $businessID: ID
    $content: String
    $endDate: AWSDateTime
    $id: ID
    $percent: Float
  ) {
    onCreatePromotionProd(
      businessID: $businessID
      content: $content
      endDate: $endDate
      id: $id
      percent: $percent
    ) {
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
export const onUpdatePromotionProd = /* GraphQL */ `
  subscription OnUpdatePromotionProd(
    $businessID: ID
    $content: String
    $endDate: AWSDateTime
    $id: ID
    $percent: Float
  ) {
    onUpdatePromotionProd(
      businessID: $businessID
      content: $content
      endDate: $endDate
      id: $id
      percent: $percent
    ) {
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
export const onDeletePromotionProd = /* GraphQL */ `
  subscription OnDeletePromotionProd(
    $businessID: ID
    $content: String
    $endDate: AWSDateTime
    $id: ID
    $percent: Float
  ) {
    onDeletePromotionProd(
      businessID: $businessID
      content: $content
      endDate: $endDate
      id: $id
      percent: $percent
    ) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $id: ID
    $content: String
    $businessID: ID
    $media: [String]
    $upvote: Int
    $author: ID
  ) {
    onCreatePost(
      id: $id
      content: $content
      businessID: $businessID
      media: $media
      upvote: $upvote
      author: $author
    ) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $id: ID
    $content: String
    $businessID: ID
    $media: [String]
    $upvote: Int
    $author: ID
  ) {
    onUpdatePost(
      id: $id
      content: $content
      businessID: $businessID
      media: $media
      upvote: $upvote
      author: $author
    ) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $id: ID
    $content: String
    $businessID: ID
    $media: [String]
    $upvote: Int
    $author: ID
  ) {
    onDeletePost(
      id: $id
      content: $content
      businessID: $businessID
      media: $media
      upvote: $upvote
      author: $author
    ) {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($id: ID, $info: String, $postID: ID, $type: Int) {
    onCreateReport(id: $id, info: $info, postID: $postID, type: $type) {
      id
      info
      postID
      type
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($id: ID, $info: String, $postID: ID, $type: Int) {
    onUpdateReport(id: $id, info: $info, postID: $postID, type: $type) {
      id
      info
      postID
      type
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($id: ID, $info: String, $postID: ID, $type: Int) {
    onDeleteReport(id: $id, info: $info, postID: $postID, type: $type) {
      id
      info
      postID
      type
    }
  }
`;
