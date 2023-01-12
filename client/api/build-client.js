import axios from "axios";

//this is going to tell us where are we, because this code could be run by server or browser.
const custom_build = ({ req }) => {
  if (typeof window === "undefined") {
    var baseURL =
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local";
    // var baseURL = "http://www.racoonrepublic.ca/";
    return axios.create({
      baseURL,
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};

export default custom_build;
