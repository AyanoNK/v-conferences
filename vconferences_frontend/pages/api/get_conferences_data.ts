import type { NextApiRequest, NextApiResponse } from "next";
import instance from "../../axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await instance
      .get(`${process.env.BACKEND_SERVER_HOST}/talk?search=${req.query.search}`)
      .then((res) => res.data);
    res.status(200).json(data);
  } catch (error) {
    res.status(400);
  }
}
