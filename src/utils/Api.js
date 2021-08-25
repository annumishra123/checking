import axios from "axios";

export async function getData(path) {
    const getPra = path;
    let config = {
        headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    };
    try {
        const url = getPra ;
        return await axios.get(url, config);
    } catch (error) {
        console.log(error);
    }
}