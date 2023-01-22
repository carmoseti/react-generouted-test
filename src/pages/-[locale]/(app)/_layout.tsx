import {Link, Outlet} from "react-router-dom";

export default function () {
    return (
        <div style={{
            background: '#ffd9ba',
            padding: 16
        }}>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}