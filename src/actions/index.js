import axios from "axios";
import { FETCH_CITY } from './types';
const API_URI = "/api/v1"


export async function fetchCity(values) {
  console.log(values)
  const url = `${API_URI}/cities/${values.cityName}&${values.time}&${values.schoolType}&${values.accommodationType}`;
  // const url = `${API_URI}/cities/London&12&mid&apshared`;
  const request = await axios.get(url);

  return {
    type: FETCH_CITY,
    payload: request.data
  };
}