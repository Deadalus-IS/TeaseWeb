// pages/api/sendMessage.js

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { phoneNumber } = req.query;

    if (!phoneNumber) {
      return res
        .status(400)
        .json({ error: "Phone number is required as a parameter" });
    }

    const url = "https://devapi.fayasms.com/messages";
    const headers = new Headers({
      "Content-Type": "application/json",
      "fayasms-developer": "09311836.9ICZY7Njg1nBKZJRgedfsqnlfb8Hz2bM",
    });

    const data = {
      sender: "Cirlorm",
      message: "Hello world",
      recipients: [phoneNumber],
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();
      res.status(response.status).json(responseData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
