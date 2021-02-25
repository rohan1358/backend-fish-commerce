module.exports = {
  response: (res, result, status, err) => {
    let resultPrint = {};
    resultPrint.status = "success";
    resultPrint.status_code = status;
    resultPrint.data = result;
    resultPrint.err = err || null;
    return res.status(resultPrint.status_code).json(resultPrint);
  },
};
