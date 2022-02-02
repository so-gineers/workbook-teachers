import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import Requests from "../../../requests";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "Username, email or phone number",
          type: "text",
          placeholder: "....",
        },
        password: { label: "Your super secret password", type: "password" },
      },
      authorize: (credentials) => {
        const data = Requests.LoginTeacher(credentials);
        return data;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.data = user.token;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.apiToken = token.data;
      }
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: {
    secret: "test",
    encryption: true,
  },
});
