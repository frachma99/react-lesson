import axios from "axios";

export function requestGetUser() {
  return axios.get("https://my-json-server.typicode.com/frachma99/demo/user");

  // return axios.request({
  //   method: "get",
  //   url: "https://my-json-server.typicode.com/frachma99/demo/user",
  // });
}
