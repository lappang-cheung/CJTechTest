// Handling request with axios
import axios from 'axios';
// Set base url
const BASE_URL = "https://cloutjam-real-backend-k2223w.herokuapp.com/v1";
axios.defaults.baseURL = BASE_URL;
// Custom axios settings
export default axios;