/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocalBetaVersion = /* GraphQL */ `
  mutation CreateLocalBetaVersion($input: CreateLocalBetaVersionInput!) {
    createLocalBetaVersion(input: $input) {
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
export const updateLocalBetaVersion = /* GraphQL */ `
  mutation UpdateLocalBetaVersion($input: UpdateLocalBetaVersionInput!) {
    updateLocalBetaVersion(input: $input) {
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
export const deleteLocalBetaVersion = /* GraphQL */ `
  mutation DeleteLocalBetaVersion($input: DeleteLocalBetaVersionInput!) {
    deleteLocalBetaVersion(input: $input) {
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
export const createDeal = /* GraphQL */ `
  mutation CreateDeal($input: CreateDealInput!) {
    createDeal(input: $input) {
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
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal($input: UpdateDealInput!) {
    updateDeal(input: $input) {
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
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal($input: DeleteDealInput!) {
    deleteDeal(input: $input) {
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
