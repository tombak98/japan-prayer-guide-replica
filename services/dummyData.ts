import axios from "axios";

export async function getData() {
    const {data} = await axios.get('https://dummyjson.com/users')
    return data.users
}