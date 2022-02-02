import railsRouter from "./_railsRouter";
import RailsApiClient from "./_axios";

const LoginTeacher = async (credentials) => {
  const requestOptions = {
    identifier: credentials.username,
    password: credentials.password,
  };

  try {
    const response = await RailsApiClient.post(
      railsRouter.teachers.sessions.create(),
      requestOptions
    );
    return response.data;
  } catch {
    return null;
  }
};

export default LoginTeacher;
