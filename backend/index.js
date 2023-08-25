const express = require("express");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const app = express();
const port = 3000;
const client = new OAuth2Client();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// JSON 데이터를 받는 POST 요청 처리
app.post("/validation", async (req, res) => {
  const { token } = req.body;

  client.setCredentials({ access_token: token });
  const userinfo = await client.request({
    url: "https://www.googleapis.com/oauth2/v3/userinfo",
  });

  res.json(userinfo.data);
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
