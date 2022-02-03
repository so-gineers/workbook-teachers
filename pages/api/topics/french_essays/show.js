import Requests from "../../../../requests";

export default async (req, res) => {
  const response = await Requests.teachers.topics.FrenchEssays.Show(
    req.query.token,
    req.query.id
  );
  res.status(200).json(response);
};
