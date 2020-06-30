const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const fs = require("fs")
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.post("/push", (req, res) => {
    const models = eval(fs.readFileSync("../gltfModels.json", "utf8"))
    models.push(req.body)
    fs.writeFileSync("../gltfModels.json", JSON.stringify(models))
})

app.post("/pop", (req, res) => {
    const models = eval(fs.readFileSync("../gltfModels.json", "utf8"))
    const modelsFiltered = models.filter((gltf) => gltf.name !== req.body.name)
    fs.writeFileSync("../gltfModels.json", JSON.stringify(modelsFiltered))
})

// listen on the port
app.listen(port)