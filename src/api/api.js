import axios from "axios";

const baseUrl = 'https://swapi.dev/api';

export const getPeoples = (page) => {
   return  axios.get(baseUrl + `/people/?page=${page}`)
       .then(response => response.data)
}

export const getPeoplesListInfo = () => {
   return  axios.get(baseUrl + `/people`)
       .then(response => response.data)
}
