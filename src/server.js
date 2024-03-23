//Exrpess 세팅
import express from "express";
const app = express();
const handleListen = () => console.log(`Listening on http://localhost:3000`)
app.listen(3000);

// FrontEnd 세팅
// 유저가 볼 수 있는 폴더 지정
app.set("view engine","pug");
app.set("views", __dirname +"/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/*",(req,res) =>{
    res.redirect("/");
});
// 라우터
app.get("/",(req,res) => {
    res.render("home");
});



