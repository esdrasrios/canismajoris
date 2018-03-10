import axios from "axios";
const API_URI = "/api/v1"


export async function fetchCity(values) {
  console.log(values.cityName)
  const url = `${API_URI}/cities/${values.cityName}`;
  const request = await axios.get(url);

  return {
    type: 'FETCH_CITY',
    payload: request
  };
}