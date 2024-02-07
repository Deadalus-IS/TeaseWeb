// pages/api/proxy/[...slug].js
import axios from "axios";

export default async function handler(req, res) {
  const apiUrl = `http://api.tixvote.com:444/payments/listenPayment`;

  try {
    // Assuming req.body contains the data you want to send in the POST request
    console.log(req.body, apiUrl);
    const response = await axios.post(apiUrl, req.body);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Internal Server Error" });
  }
}
