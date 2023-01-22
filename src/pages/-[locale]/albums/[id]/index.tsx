import {Await, defer, Link, LoaderFunction, LoaderFunctionArgs, useAsyncValue, useLoaderData} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {Album} from "~/pages/-[locale]/albums";
import {Suspense} from "react";

export type AlbumPhoto = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export const Loader: LoaderFunction = async ({params, request, context}: LoaderFunctionArgs) => {
    const album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
    const photos = axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)

    return defer({
        album,
        photos
    })
}

export default function () {
    const {album, photos} = useLoaderData() as {
        album: AxiosResponse<Album>,
        photos: Promise<AxiosResponse<Array<AlbumPhoto>>>
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
            <h1>Album Title - {album?.data?.title}</h1>
            <h3>Photos</h3>
            <Suspense fallback={'Loading photos. Please wait...'}>
                <Await resolve={photos}>
                    <AlbumPhotos/>
                </Await>
            </Suspense>
        </div>
    )
}

function AlbumPhotos() {
    const photos = useAsyncValue() as AxiosResponse<Array<AlbumPhoto>>
    return (
        <ul>
            {photos?.data?.map((photo) => (
                <li key={photo.id}>
                    <img src={photo.url} alt={photo.url} style={{
                        height: 100,
                        width: 100,
                    }}/>
                    {photo.title}
                </li>
            ))}
        </ul>
    )
}