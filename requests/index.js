import LoginTeacher from "./login";
import TeacherDashboard from "./dashboard";
import Topics from "./topics";

const Requests = {
  LoginTeacher: LoginTeacher,
  teachers: {
    dashboard: TeacherDashboard,
    topics: Topics,
  },
};

export default Requests;
