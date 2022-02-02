import axios from "axios";

const RailsApiClient = axios.create({
  baseURL: `${process.env.RAILS_API_URL}/`,
  timeout: 5000,
  headers: {
    common: {
      "User-Agent": "Workbook Teacher Server / 0.0.1",
    },
  },
});

export default RailsApiClient;
