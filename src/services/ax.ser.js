import axios from "axios";

const axInst = axios.create({
    baseURL:'http://owu.linkpc.net/api/v2'
});
export {axInst}