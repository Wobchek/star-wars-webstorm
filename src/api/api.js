import axios from "axios";

const baseUrl = 'https://swapi.dev/api/';

export const peoplesAPI = {
   getPeoples(page) {
      return  axios.get(baseUrl + `people/?page=${page}`)
          .then(response => response.data)
   },
   getPeoplesListInfo() {
      return  axios.get(baseUrl + `people`)
          .then(response => response.data)
   },
   getHomeworld(planet) {
      return axios.get(`${planet}`)
          .then(response => response.data)
   },
   getFilms(films) {
      return axios.get(`${films}`)
          .then(response => response.data)
   },
   getVehicles(vehicles) {
      return axios.get(`${vehicles}`)
          .then(response => response.data)
   },
   getStarships(starships) {
      return axios.get(`${starships}`)
          .then(response => response.data)
   },
}
