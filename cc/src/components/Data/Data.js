import axios from "axios"

export const DataService = {
    async getAll() {
        const response = await axios.get('http://localhost:3001/users')
        return response.data
    }
}   