import type { NextApiRequest, NextApiResponse } from "next";
import instance from "../../axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  try {
    const data = await instance
      .post(`${process.env.BACKEND_SERVER_HOST}/auth/login/`, {
        params: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .then((res) => res.data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
  }
}
