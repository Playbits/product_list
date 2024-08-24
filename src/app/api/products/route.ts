import axios, { AxiosResponse } from "axios";
import { NextRequest } from "next/server";

const url = "https://dummyjson.com/products";


const GET = async (req: NextRequest, { params }: { params: any }) => {
    try {
        const { data, status } = await axios.get(url)
        return Response.json(data, { status: status });
    } catch (error: any) {
        const { data, status } = error.response as AxiosResponse;
        return Response.json(data, { status: status });
    }
};


export { GET }