import railsRouter from "./_railsRouter";
import RailsApiClient from "./RailsApiClient";

const TeacherDashboard = async (token) => {
  try {
    RailsApiClient.defaults.headers.common["X-WORKBOOK-TOKEN"] = token;
    RailsApiClient.defaults.headers.post["Content-Type"] = "application/json";
    const response = await RailsApiClient.get(
      railsRouter.teachers.dashboard.getAll()
    );
    return response.data;
  } catch (error) {
    console.error("error %s", error);
    return null;
  }
};

export default TeacherDashboard;
