import axios from "axios";

export const getProducts = async () => {
    const url = "/api/products/"
    const { data, status } = await axios.get(url);
    return { data, status };
};