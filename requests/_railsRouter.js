import { urlObjectKeys } from "next/dist/shared/lib/utils";

const __url = (path) => {
  return `${process.env.RAILS_API_URL}/${path}`;
};
const railsRouter = {
  teachers: {
    sessions: {
      create: () => {
        return __url("teachers/sessions");
      },
    },
    dashboard: {
      getAll: () => {
        return __url("teachers/dashboards");
      },
    },
    topics: {
      frenchEssays: {
        Show: (id) => {
          return __url(`teachers/topics/french_essays/${id}`);
        },
      },
    },
  },
};

export default railsRouter;
