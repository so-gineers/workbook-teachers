import axios from "axios";

const NextApiClient = axios.create({
  baseURL: `${process.env.NEXT_API_URL}/`,
  timeout: 5000,
  headers: {
    common: {
      "User-Agent": "Workbook Teacher Client / 0.0.1",
    },
  },
});

export default NextApiClient;
