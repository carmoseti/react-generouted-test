import {Link, Outlet} from "react-router-dom";

export default function () {
    return (
        <div style={{
            background: '#baceff',
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