let count = 0;

const viewCount = (req, res, next) => {
  count++;
  console.log(count);
  // res.send("tools found and +1")
  next()
};

module.exports = viewCount;
