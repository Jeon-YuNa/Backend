const checkDeleteData = (req, res, next) => {
  const { id } = req.body;
  if (!req.body)
    res.status(400).json({ success: false, message: "데이터를 입력해주세요." });
  if (!id)
    res.status(404).json({
      success: false,
      message: "삭제하려는 상품의 id를 입력해주세요.",
    });

  next();
};
module.exports = { checkDeleteData };
