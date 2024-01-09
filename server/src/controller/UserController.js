const UserService = require("../services/UserService");
const JwtService = require("../services/JwtService");

const createUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password || !confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email",
      });
    } else if (password !== confirmPassword) {
      return res.status(200).json({
        status: "ERR",
        message: "The password is equal confirmPassword",
      });
    }
    console.log("isCheckEmail", isCheckEmail);
    const responsve = await UserService.createUser(req.body);
    return res.status(200).json(responsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const isCheckEmail = reg.test(email);
    if (!email || !password) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    } else if (!isCheckEmail) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is email",
      });
    }
    const responsve = await UserService.loginUser(req.body);
    // console.log("responsve", responsve);
    const { refresh_token, ...newReponsve } = responsve;
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: false,
      samesite: "strict",
    });
    return res.status(200).json(newReponsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    console.log("userId", userId);
    const responsve = await UserService.updateUser(userId, data);
    return res.status(200).json(responsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    const responsve = await UserService.deleteUser(userId);
    return res.status(200).json(responsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const responsve = await UserService.getAllUser();
    return res.status(200).json(responsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(200).json({
        status: "ERR",
        message: "The userId is required",
      });
    }
    const responsve = await UserService.getDetailsUser(userId);
    return res.status(200).json(responsve);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const refreshToken = async (req, res) => {
  console.log("req.cookies", req.cookies);
  try {
    const token = req.cookies.refresh_token;
    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "The token is required",
      });
    }
    const response = await JwtService.refreshTokenService(token);
    return res.status(200).json(response);
    return;
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.refresh_token; // Lấy token từ cookie
    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "Token not found",
      });
    }
    
    // Hủy token refresh bằng cách gọi service hoặc xóa khỏi lưu trữ
    await JwtService.invalidateRefreshToken(token);

    // Xóa cookie khỏi client
    res.clearCookie("refresh_token");

    return res.status(200).json({
      status: "success",
      message: "Logged out successfully",
    });
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  refreshToken,
  logout
};
