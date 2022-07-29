const errorMiddleware = (error, _req, res, _n) => {
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  return res.status(500).json({ message: 'Internal error' });
};

module.exports = errorMiddleware;