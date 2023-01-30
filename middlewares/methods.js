const methods = (req, res, next) => {
  const method = req.method;
  if (
    method !== "POST" &&
    method !== "GET" &&
    method !== "PUT" &&
    method !== "DELETE"
  ) {
    return res.status(405).send("Invalid http request method");
  }
  next();
};


module.exports =
  methods

