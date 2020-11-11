/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocalBetaVersion = /* GraphQL */ `
  query GetLocalBetaVersion($id: ID!) {
    getLocalBetaVersion(id: $id) {
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
export const listLocalBetaVersions = /* GraphQL */ `
  query ListLocalBetaVersions(
    $filter: TableLocalBetaVersionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocalBetaVersions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
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
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: TableDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
