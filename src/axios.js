// imports axios middleware
import axios from "axios";

// sets the base URL that will be connected to the endpoints in requests.js
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

// exports the content of this file to
// this allows us to name this file whatever we want when used in other files
export default instance;
