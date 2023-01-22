import {ActionFunction, ActionFunctionArgs, redirect} from "react-router-dom";
import axios from "axios";

export const Action :ActionFunction = async ({params,request,context} :ActionFunctionArgs) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    console.log(response)

    return redirect('/posts')
}