export default function handler(req, res) {
  if (req.method === "POST") {
    return res.status(200).json({
      message: "POST received",
      body: req.body
    });
  }

  return res.status(200).json({
    message: "Send a POST request"
  });
}
