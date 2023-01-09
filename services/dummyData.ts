import axios from "axios";

export async function getData() {
    const {data} = await axios.get('dummyjson.com/users')
    return data.users
}