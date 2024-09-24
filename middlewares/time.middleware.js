const verifyRequestTime = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.render("error");
  }
};
export { verifyRequestTime };
