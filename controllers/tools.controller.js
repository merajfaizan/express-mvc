module.exports.getAllTools = async (req, res) => {
  const { ip, query, params, body, headers } = req;
  console.log(ip, query, params, body, headers);
  res.download(__dirname + "/tools.controller.js");
};

module.exports.getToolDetail = async (req, res) => {
  res.send("tool details found");
};

module.exports.saveATool = async (req, res) => {
  res.send("tools added");
};
