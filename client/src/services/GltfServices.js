import axios from "axios"

export default {
    async push(newGltfModel) {
        await axios.post("http://localhost:8000/push", newGltfModel)
    },
    async pop(gltfName) {
        await axios.post("http://localhost:8000/pop", gltfName)
    },
}