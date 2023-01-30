const authorization = (req, res, next) => {
  const url = req.originalUrl;
  const arrayUrl = url.split("/");
  let valid;
  if (arrayUrl.length > 1) {
    for (let index = 0; index < arrayUrl.length; index++) {
      const element = arrayUrl[index];
      if (element === "") valid = true;
      else valid = false;
    }
    if (valid)
      return res
        .status(401)
        .json({ message: "You have no authorization brou" });
  }
  next();
};

module.exports = authorization;
