const existor = (req, res, next) => {
  const { id } = req.params;
  if (!id)
    res.status(404).json({ success: false, message: "없는 차량입니다." });
  //   const idRegex = /^[0-9]{4}[가-힇]$/; // 4자리 숫자와 한글 하나
  //     if (idRegex.test(id))
  //       res.status(404).json({ success: false, message: "id 형식이 틀렸습니다." });
  next();
};
module.exports = { existor };
