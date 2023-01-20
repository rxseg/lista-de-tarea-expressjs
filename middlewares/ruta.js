const rutaValidada = (req, res, next) => {
  const url = req.originalUrl;
  if (
    url != "/" &&
    url != "/tasks" &&
    url != "/completed-tasks" &&
    url != "/incompleted-tasks"
  ) {
    return res.status(405).send(url);
  } else {
    next();
  }
};
module.exports = rutaValidada;
