import axios from 'axios';

const BASE_URL = "https://cloutjam-real-backend-k2223w.herokuapp.com/v1";

axios.defaults.baseURL = BASE_URL;

export default axios;