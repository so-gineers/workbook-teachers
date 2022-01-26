const __url = (path) => {
  return `${process.env.RAILS_API_URL}/${path}`;
};
const railsRouter = {
  createTeacherSession: (path = "teachers/sessions") => {
    return __url(path);
  },
  getTeacherDashboard: (path = "") => {
    return __url(path);
  },
};

export default railsRouter;
