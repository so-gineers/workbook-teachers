import Requests from "../../../requests";

export default async (req, res) => {
  const response = await Requests.teachers.dashboard(req.query.token);
  res.status(200).json(response);
};
