const rutaValidada = (req, res, next) => {
  const url = req.originalUrl;
  if (
    url != "/" &&
    url != "/tasks" &&
    url != "/completed-tasks" &&
    url != "/incompleted-tasks" &&
    url != "/home"
  ) {
    return res.status(404).send("Parámetros inválidos brou");
  } else {
    next();
  }
};
module.exports = rutaValidada;
