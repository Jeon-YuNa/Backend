const successResponse = (res, statusCode = 200, message = "OK", data) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const failResponse = (
  res,
  statusCode = 404,
  message = "Fail",
  code = "no found",
  details = "실패"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
      details,
    },
  });
};

module.exports = { successResponse, failResponse };
