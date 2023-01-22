import {Link, Outlet} from "react-router-dom";

export default function ProductsLayout() {
    return (
        <div style={{
            borderTop: 'solid 4px #FF6000',
            background: '#ECECEC',
            padding: 16
        }}>
            <ul>
                <li>
                    <Link to={'..'} relative={"path"}>Back</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}