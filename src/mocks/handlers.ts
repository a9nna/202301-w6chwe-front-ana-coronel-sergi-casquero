import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "",
          image: "",
          stats: {
            speed: 2,
            endurance: 5,
            creationDate: new Date().getDay(),
          },
        },
      ])
    );
  }),
];
