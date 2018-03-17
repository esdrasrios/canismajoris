import axios from "axios";
import { FETCH_CITY } from './types';
const API_URI = "/api/v1"


export async function fetchCity(values) {
  const url = `${API_URI}/cities/${values.cityName}&${values.time}&${values.schoolType}&${values.accommodationType}`;
  console.log(url);
  const request = await axios.get(url);

  return {
    type: FETCH_CITY,
    payload: request.data
  };
}