const voidPost = (req, res, next) => {
  const method = req.method;
  if (method === "POST" || method === "PUT") {
    if (Object.values(req.body).length === 0) {
      return res.status(400).send("Body is null");
    }
  }
  next();
};

module.exports = voidPost;
