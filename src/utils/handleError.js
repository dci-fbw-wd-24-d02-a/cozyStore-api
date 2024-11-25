export const handleError = (payload, req, res, next) => {
  res.status(500).json(payload);
};
