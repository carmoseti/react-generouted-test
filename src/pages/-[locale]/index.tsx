import {Link, useParams} from "react-router-dom";

export default function Home() {
    const {locale} = useParams()

    return (
        <div>
            <h1>Index/Home page {locale ? `- ${locale}` : ""}
            </h1>

            <ul>
                <li>
                    <Link to={'albums'}>Albums</Link>
                </li>
                <li>
                    <Link to={'posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'products'}>Products</Link>
                </li>
                <li>
                    <Link to={'dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link to={'about'}>About Us</Link>
                </li>
            </ul>
        </div>
    )
}