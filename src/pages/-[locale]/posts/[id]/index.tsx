import {Form, Link, LoaderFunction, useLoaderData, useMatch} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {Post} from "~/pages/-[locale]/posts/index";

export type PostComment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const Loader: LoaderFunction = async ({params, request, context}) => {
    return axios.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`),
    ])
}

export default function () {
    const response = useLoaderData() as [AxiosResponse<Post>, AxiosResponse<Array<PostComment>>]
    const post = response[0]?.data;
    const postComments = response[1]?.data;

    /*const match = useMatch(`/posts/:id`)
    console.log(match)*/

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>{post?.title}</h1>
            <div style={{
                padding: 8
            }}>
                {post?.body}

                <h3>Comments</h3>

                {postComments?.map((postComment) => (
                    <div key={postComment.id} style={{
                        borderLeft: 'solid 4px #cc3000',
                        padding: 4,
                        marginBottom: 16,
                        background: '#ffffff'
                    }}>
                        <p><i>{postComment.body}</i></p>
                        <a href={`mailto:${postComment.email}`}>{postComment.name} - {postComment.email}</a>
                    </div>
                ))}
            </div>
            <p>
                <Link to={'edit'}>Edit Post</Link>
            </p>
            <div>
                <Form action={`delete`}
                      method={'delete'}
                      onSubmit={(e) => {
                          const confirmation = confirm('Are you sure you want to delete this post')

                          if (!confirmation) e.preventDefault()
                      }}
                >
                    <button type={'submit'}>Delete Post</button>
                </Form>
            </div>
        </div>
    )
}