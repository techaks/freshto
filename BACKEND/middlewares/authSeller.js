import jwt from "jsonwebtoken";

const authSeller = (req, res, next) => {
  const { sellerToken } = req.cookies;
  if (!sellerToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
    // console.log(decoded);

    if (decoded.email === process.env.SELLER_EMAIL) {
      next();
    } else return res.status(401).json({ message: "Unauthorized" });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "error" });
  }
};

export default authSeller;
