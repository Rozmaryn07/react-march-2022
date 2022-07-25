import axios from "axios";

import {baseURL} from "../constants";
import {createBrowserHistory} from "history";

const axiosService = axios.create({baseURL});
const history = createBrowserHistory();

export {
    axiosService,history
}