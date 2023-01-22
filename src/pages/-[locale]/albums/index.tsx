import {Link, LoaderFunction, useLoaderData, useParams} from "react-router-dom";
import axios, {AxiosResponse} from "axios";

export type Album = {
    userId: number
    id: number
    title: string
}

export const Loader: LoaderFunction = async ({params, request, context}) => {
    /*throw Error('Unable to load this at the moment!')*/

    return axios.get(`https://jsonplaceholder.typicode.com/albums`,{
        signal: request.signal
    })
}

export default function () {
    const {locale} = useParams()
    const response = useLoaderData() as AxiosResponse<Array<Album>>

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>List of Albums {locale ? `- ${locale}` : ""}</h1>
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