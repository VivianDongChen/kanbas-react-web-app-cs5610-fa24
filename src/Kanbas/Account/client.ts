import axios from "axios";

export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
  //The credentials object is sent as the request body.
  const response = await axios.post(`${USERS_API}/signin`, credentials); //Awaits the server's response.
  return response.data;//The function returns the data received from the server (response.data).
};
