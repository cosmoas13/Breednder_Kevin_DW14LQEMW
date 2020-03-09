// import axios from "axios";
import { LOGIN, REGISTER } from "../config/constants";
import { API, setAuthToken } from "../config/api";

export const getAuth = () => {
  console.log("getusers");
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: "GET_AUTH",
      payload: async () => {
        setAuthToken(token);
        const res = await API.get("/autoauth");
        console.log("cek data", res.data.data);

        return res.data.data;
      }
    };
  } else {
    return {
      type: "LOGOUT",
      payload: {}
    };
  }
};

export const login = data => {
  console.log("data action login", data);
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post("/login", data);
      console.log("cek login", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      // localStorage.setItem("userId", res.data.data.id);

      return res.data;
    }
  };
};

export const register = data => {
  console.log("data action register", data);
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);
      console.log("cek register", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.email);
      // localStorage.setItem("userId", res.data.id);
      console.log(res);
      return res.data;
    }
  };
};
