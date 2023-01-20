const methods = (req, res, next) => {
  const method = req.method;
  if (method === "POST" || method === "GET") {
    next();
  } else {
    res.status(405).send("Invalid http request method");
  }
};

module.exports = methods;
