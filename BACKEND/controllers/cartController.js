import User from '../models/User.js';

export const updateCart = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { cartItems } = req.body;

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized user" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { cartItems: cartItems },
      { new: true }
    );

    return res.status(200).json({ success: true, message: "Cart updated", user });
  } catch (error) {
    console.log("Update cart error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
