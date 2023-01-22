import {Link, LoaderFunction, useLoaderData, useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export const Loader: LoaderFunction = async ({params, request, context}) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`,{
        signal: request.signal
    })
}

export default function () {
    const {locale} = useParams()
    const response = useLoaderData() as AxiosResponse<Array<Post>>

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>List of Posts {locale ? `- ${locale}` : ""}</h1>
            <ul>
                {response?.data?.map((post) => (
                    <li key={post.id}>
                        <Link to={`${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}