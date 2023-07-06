let tools = [
  { id: 1, name: "Hammer" },
  { id: 2, name: "Hammer2" },
  { id: 3, name: "Hammer3" },
];

module.exports.getAllTools = async (req, res) => {
  const { limit, page } = req.query;
  console.log(limit, page);
  res.json(tools.slice(0, limit));
};

module.exports.getToolDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const filter = { _id: id };
  const foundTool = tools.find((tool) => tool.id == Number(id));
  res.send(foundTool);
};

module.exports.saveATool = async (req, res) => {
  console.log(req.body);
  tools.push(req.body);
  res.send(tools);
};

module.exports.updateTool = async (req, res) => {
  // const data = req.body;
  const { id } = req.params;
  const filter = { _id: id };

  const newData = tools.find((tool) => tool.id === Number(id));

  newData.id = id;
  newData.name = req.body.name;

  res.send(newData);
};

module.exports.deleteTool = async (req, res) => {
  const { id } = req.params;
  const filter = { _id: id };

  tools = tools.filter((tool) => tool.id !== Number(id));

  res.send(tools);
};
