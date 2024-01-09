const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const genneralAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      ...payload,
    },
    process.env.ACCESS_TOKEN,
    { expiresIn: "15m" },
  );
  return access_token;
}

const genneralRefreshToken = (payload) => {
  const refresh_token = jwt.sign(
    {
      ...payload,
    },
    process.env.REFRESH_TOKEN,
    { expiresIn: "365d" },
  );
  return refresh_token;
}

const refreshTokenService = (token) => {
    return new Promise((resolve, reject) => {
      try {
        jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
          if (err) {
            console.log('err', err);
            resolve({
              status: "ERR",
              message: "The authentication",
            });
          }
          const access_token = await genneralAccessToken({
            id: user?.id,
            isAdmin: user?.isAdmin,
          });
          console.log('access_token:', access_token);
          resolve({
            status: "OK",
            message: "SUCCESS",
            access_token,
          });
        });
      } catch (e) {
        reject(e);
      }
    });
  };

let refreshTokens = []; // Mảng lưu trữ các token refresh

const invalidateRefreshToken = async (tokenToInvalidate) => {
  refreshTokens = refreshTokens.filter(token => token !== tokenToInvalidate);
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    refreshTokenService,
    invalidateRefreshToken
}