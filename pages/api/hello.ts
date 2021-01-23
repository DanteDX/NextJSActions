import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);
  res.status(200).json({ message: 'This is a response back from the api' });
}