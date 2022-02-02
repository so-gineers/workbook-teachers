import axios from "axios";

const RailsApiClient = axios.create({
  baseURL: `${process.env.RAILS_API_URL}/`,
});

export default RailsApiClient;
