import axios from "axios";
//  import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

console.log("process.env.REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL // "https://run.mocky.io/v3"
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

instance.interceptors.request.use(req => {
  console.log("INSTERCEPTORS", req.url);
  return req;
});

instance.interceptors.response.use(res => {
  // console.log("Response", res);
  try {
    if (res.status === 200) {
      toast.success(res.data.data.message);
      console.log("Status", res.status);
      // return res;
    } else {
      console.log("Status ELSE", res.status);
      toast.error(res.data.data.message);
    }
  } catch (err) {
    toast.error(res.data.data.message);
  }
  return res;
});

export default instance;
