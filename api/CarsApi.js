import axios from "axios"

const BACKEND_URL='https://carsapp-2d98c-default-rtdb.firebaseio.com/'

export async function fetchCars() {
    const response = await axios.get(BACKEND_URL + '/carsData.json')
  
    const carsData = []
    
    for (const key in response.data) {
      const carObj = {
        id: response.data[key].uuid,
        name: response.data[key].name,
        country: response.data[key].country,
        email: response.data[key].email,
        vehicle: response.data[key].vehicle,
        avatar: response.data[key].avatar
      };
      carsData.push(carObj)
    }
  
    return carsData
  }