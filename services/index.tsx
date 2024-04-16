// installed package 
// npm add graphql-request graphql


import { request, gql } from 'graphql-request'

const base_url = 'https://api-eu-west-2.hygraph.com/v2/clusarz760jus07wezxsflsr2/master';



export const getCarList = async () => {
  const query = gql`
    query CarLists {
        carLists {
          carAvg
          createdAt
          id
          name
          price
          publishedAt
          seat
          updatedAt
          image {
            url
          }
          carType
          carBrand
        }
      }
      `
  const result = await request(base_url, query)

  return result;
}

export const getStoreLocations = async () => {
  const query = gql`
  query storesLocation {
    storesLocations {
      address
    }
  }
  `
  const result = await request(base_url, query)

  return result;
}


export const createBooking = async (formValue: any) => {
  const mutationQuery = gql` 
  mutation MyMutation {
    createBooking(
      data: {
        userName: "`+ formValue.userName + `",
        contactNumber: "`+ formValue.contactNumber + `",
        pickUpTime: "`+ formValue.pickupTime + `", 
        pickUpDate: "`+ formValue.pickupDate + `", 
        dropOffTime: "`+ formValue.userName + `", 
        dropOffDate: "`+ formValue.dropoffDate + `",
        carId: {connect: {id: "`+ formValue.carId + `"}}}
    ) {
      id
    }
  }
  
  `
  const result = await request(base_url, mutationQuery)

  return result;
}