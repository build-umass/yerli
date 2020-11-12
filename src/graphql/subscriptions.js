/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocalBetaVersion = /* GraphQL */ `
  subscription OnCreateLocalBetaVersion(
    $id: ID
    $name: String
    $flags: String
    $workers: Int
    $typeOfBusiness: String
  ) {
    onCreateLocalBetaVersion(
      id: $id
      name: $name
      flags: $flags
      workers: $workers
      typeOfBusiness: $typeOfBusiness
    ) {
      name
      flags
      workers
      typeOfBusiness
      business_bio
      owner_bio
      hours_of_oper
      phone_num
      topProducts
      website
      photo
      photos
      address
      email
      city
      lon
      lat
      streetAddress
      typeOfCuisine
      bio
      id
    }
  }
`;
export const onUpdateLocalBetaVersion = /* GraphQL */ `
  subscription OnUpdateLocalBetaVersion(
    $id: ID
    $name: String
    $flags: String
    $workers: Int
    $typeOfBusiness: String
  ) {
    onUpdateLocalBetaVersion(
      id: $id
      name: $name
      flags: $flags
      workers: $workers
      typeOfBusiness: $typeOfBusiness
    ) {
      name
      flags
      workers
      typeOfBusiness
      business_bio
      owner_bio
      hours_of_oper
      phone_num
      topProducts
      website
      photo
      photos
      address
      email
      city
      lon
      lat
      streetAddress
      typeOfCuisine
      bio
      id
    }
  }
`;
export const onDeleteLocalBetaVersion = /* GraphQL */ `
  subscription OnDeleteLocalBetaVersion(
    $id: ID
    $name: String
    $flags: String
    $workers: Int
    $typeOfBusiness: String
  ) {
    onDeleteLocalBetaVersion(
      id: $id
      name: $name
      flags: $flags
      workers: $workers
      typeOfBusiness: $typeOfBusiness
    ) {
      name
      flags
      workers
      typeOfBusiness
      business_bio
      owner_bio
      hours_of_oper
      phone_num
      topProducts
      website
      photo
      photos
      address
      email
      city
      lon
      lat
      streetAddress
      typeOfCuisine
      bio
      id
    }
  }
`;
export const onCreateDeal = /* GraphQL */ `
  subscription OnCreateDeal(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onCreateDeal(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
      businessID
      percent
      photo
      photos
      startDate
      endDate
    }
  }
`;
export const onUpdateDeal = /* GraphQL */ `
  subscription OnUpdateDeal(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onUpdateDeal(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
      businessID
      percent
      photo
      photos
      startDate
      endDate
    }
  }
`;
export const onDeleteDeal = /* GraphQL */ `
  subscription OnDeleteDeal(
    $id: ID
    $title: String
    $content: String
    $price: Int
    $rating: Float
  ) {
    onDeleteDeal(
      id: $id
      title: $title
      content: $content
      price: $price
      rating: $rating
    ) {
      id
      title
      content
      price
      rating
      businessID
      percent
      photo
      photos
      startDate
      endDate
    }
  }
`;
