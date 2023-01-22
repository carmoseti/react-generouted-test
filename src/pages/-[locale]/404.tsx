import {Link} from "react-router-dom";

export default function () {
    return (
        <div>
            <h1>Error - 404</h1>
            <p>Sorry, the requested page does NOT exist</p>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
            </ul>
        </div>
    )
}