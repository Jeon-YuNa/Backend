const checkPostData = (req, res, next) => {
  const { name, price } = req.body;
  if (!req.body)
    res.status(400).json({ success: false, message: "데이터를 입력해주세요." });
  if (!name)
    res.status(404).json({ success: false, message: "name값이 비어있습니다." });
  if (!price)
    res
      .status(404)
      .json({ success: false, message: "price값이 비어있습니다." });
  next();
};
module.exports = { checkPostData };
