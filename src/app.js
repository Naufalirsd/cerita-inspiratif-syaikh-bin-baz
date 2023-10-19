const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const url = "mongodb+srv://ppqita:santri@ppqitadb.9ybiiar.mongodb.net/"; 
const dbName = "biografi-syaikh-bin-baz";

app.use(bodyParser.json());
app.use(express.static("src/public"));

// Kode untuk mengambil dan menyimpan komentar ke database disini

app.post("/komentar", (req, res) => {
    // Tangani pengiriman komentar ke database di sini
    res.status(200).send("Komentar berhasil disimpan");
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
