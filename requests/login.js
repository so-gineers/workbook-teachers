import railsRouter from "./_railsRouter";

const LoginTeacher = async (credentials) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      identifier: credentials.username,
      password: credentials.password,
    }),
  };
  const response = await fetch(
    railsRouter.createTeacherSession(),
    requestOptions
  );
  const json = await response.json();
  if (response.ok && json) {
    return json;
  }
  return null;
};

export default LoginTeacher;
