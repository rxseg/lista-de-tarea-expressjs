const   attributes = (req, res, next) => {
  const { body } = req;

  if (Object.keys(body).length < 2)
    return res.status(400).json({
      msg: " datos invalidos",
    });
  next();
};

module.exports = attributes;
