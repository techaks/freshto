import jwt from "jsonwebtoken";

export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.SELLER_EMAIL ||
      password !== process.env.SELLER_PASSWORD
    ) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    } else {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      res.cookie("sellerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      });

      return res.status(200).json({
        success: true,
        message: "login success",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error",
    });
  }
};

export const isSellerAuth = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Seller is authenticated",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
    });
  }
};

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
    });

    return res.status(200).json({
      success:true,
      message: "User logged out ",
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      message: "some error in logout",
    });
  }
};
