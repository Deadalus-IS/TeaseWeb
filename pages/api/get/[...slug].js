// pages/api/proxy/[...slug].js
import axios from "axios";

export default async function handler(req, res) {
  const { slug } = req.query;
  const apiUrl = `http://api.tixvote.com:443/${slug?.join("/")}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res
      .status(error.response?.status || 500)
      .json({ error: "Internal Server Error" });
  }
}
