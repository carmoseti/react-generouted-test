import {Link, Outlet, ScrollRestoration, useNavigation, useRouteError} from "react-router-dom";

export default function () {
    const navigation = useNavigation()

    return (
        <>
            {
                navigation.state === "submitting" ?
                    <div style={{
                        width: '100vh',
                        height: '100vh',
                        background: '#ECECEC'
                    }}>
                        Submitting...
                    </div> :
                    navigation.state === "loading" ?
                        <div style={{
                            width: '100vh',
                            height: '100vh',
                            background: '#ECECEC'
                        }}>
                            Loading...
                        </div> :
                        <Outlet/>
            }
            <ScrollRestoration/>
        </>
    )
}

export function ErrorElement() {
    const error = useRouteError() as Error

    return (
        <div>
            <h1>Error</h1>
            <p>
                <i>{error?.message}</i>
            </p>
            <ul>
                <li>
                    <Link to={'..'}>Back</Link>
                </li>
            </ul>
        </div>
    )
}