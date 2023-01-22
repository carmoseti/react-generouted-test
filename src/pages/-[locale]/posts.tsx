import {Link, Outlet} from "react-router-dom";

export default function PostsLayout() {
    return (
        <div style={{
            borderTop: 'solid 4px #009688',
            background: '#ECECEC',
            padding: 16
        }}>
            <Outlet/>
        </div>
    )
}