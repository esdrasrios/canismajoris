import axios from "axios";
import { FETCH_CITY } from './types';
const API_URI = "http://api.intercambio.esdrasrios.me:5000/api/v1"


export async function fetchCity(values) {
  const url = `${API_URI}/cities/${values.cityName}&${values.time}&${values.schoolType}&${values.accommodationType}`;
  // const url = `${API_URI}/cities/Manchester&12&budget&hostel`;
  const request = await axios.get(url);

  return {
    type: FETCH_CITY,
    payload: request.data
  };
}