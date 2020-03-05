//バックエンドフレームワークのexpressをいんぽーと

const express = require("express")

//サーバーサイドアプリを作成
const app =express()
//ポート番号の設定
const port = 3001

//ミドルウェアのセットアップ(jsonはサーバーとの通信で使うよ)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// GETが来た場合の処理。app.get(url, コールバック関数)
app.get("/api", (req, res)=>{
    console.log("GETメソッド")
    res.json({
        msg: "GETが来ました"
    })
})

// サーバーの起動
app.listen(port,err=>{
    //if (err) throw new Error(err)
    //if (err) console.log(error)
    console.log(`listening on port ${port}`)
})