import railsRouter from "./_railsRouter";
import axios from "axios";

const TeacherDashboard = async (token) => {
  try {
    const response = await axios.get(railsRouter.teachers.dashboard.getAll(), {
      headers: {
        "X-WORKBOOK-TOKEN": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error("error %s", error);
    return null;
  }
};

export default TeacherDashboard;
