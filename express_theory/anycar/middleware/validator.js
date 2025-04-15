const validateCarData = (req, res, next) => {
  if (!req.body)
    res.status(400).json({ success: false, message: "body값 필수" });

  //id, name 값이 들어왔는지 체크
  const { id, name } = req.body;
  if (!id || !name)
    res
      .status(404)
      .json({ success: false, message: "모든 필드는 필수입니다." });
  //id, name 타당성 체크
  const idRegex = /^[0-9]{4}[가-힇]$/; // 4자리 숫자와 한글 하나
  if (idRegex.test(id))
    res.status(404).json({ success: false, message: "id 형식이 틀렸습니다." });
  next();
};
module.exports = { validateCarData };
