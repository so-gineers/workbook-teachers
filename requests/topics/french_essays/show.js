import axios from "axios";
import railsRouter from "../../_railsRouter";

const ShowFrenchEssayTopic = async (token, id) => {
  try {
    const response = await axios.get(
      railsRouter.teachers.topics.frenchEssays.Show(id),
      {
        headers: {
          "X-WORKBOOK-TOKEN": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("error %s", error);
    return null;
  }
};

export default ShowFrenchEssayTopic;
