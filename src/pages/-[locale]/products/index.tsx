import {Link, useParams} from "react-router-dom";

export default function () {
    const {locale} = useParams()

    return (
        <div>
            <h1>List of Products {locale ? `- ${locale}` : ""}</h1>
            <ul>
                {
                    ['milk', 'sugar', 'coffee', 'meat', 'eggs'].map((product) => (
                        <li key={product}>
                            <Link to={product}>
                                {product}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}