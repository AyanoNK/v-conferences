import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import instance from "../../axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = axios
    .post(`${process.env.BACKEND_SERVER_HOST}/auth/login/`, {
      email: req.body.email,
      password: req.body.password,
    })
    .then((response) => response.data)
    .then((data) => {
      console.log("data");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.debug(err);
      res.status(400);
    });
}
