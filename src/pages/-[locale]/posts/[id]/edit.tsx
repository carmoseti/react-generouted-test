import {
    ActionFunction,
    Form,
    Link,
    LoaderFunction,
    LoaderFunctionArgs, redirect,
    useActionData,
    useLoaderData
} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {Post} from "~/pages/-[locale]/posts/index";

export const Action: ActionFunction = async ({params, request, context}) => {
    const formData = await request.formData()
    const editedPost = Object.fromEntries(formData)

    await axios.patch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, editedPost)

    return redirect(`/posts/${params.id}`)
}

export const Loader: LoaderFunction = async ({params, request, context}) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
}

export default function () {
    const {data} = useLoaderData() as AxiosResponse<Post>

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>Edit Post</h1>
            <Form action={"."} method={"patch"}>
                <p>
                    <label htmlFor={"title"}
                           id={"title-label"}
                    >
                        Title*{" "}
                        <input id={"title"} name={"title"} title={"Title"} required={true} defaultValue={data?.title}
                               style={{
                                   width: 500
                               }}
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor={"body"}
                           id={"body-label"}
                    >
                        Body*{" "}
                        <textarea id={"body"} name={"body"} title={"Body"} required={true} defaultValue={data?.body}
                                  style={{
                                      width: 500,
                                      minHeight: 200
                                  }}
                        />
                    </label>
                </p>
                <p>
                    <input type={"submit"} id={"submit-button"} value={"Edit Post"}/>
                </p>
            </Form>
        </div>
    )
}