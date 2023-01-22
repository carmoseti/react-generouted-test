import {Link, useParams} from "react-router-dom";
import ProductDetails from "~/pages/-[locale]/products/_components/ProductDetails";

export default function () {
    const {id, locale} = useParams()

    return (
        <div>
            <h1>Product - {id}</h1>
            <p>You are currently viewing product id - {id}</p>
            {
                locale ?
                    <p>
                        Locale : {locale}
                    </p>
                    : ""
            }
            <ProductDetails/>
        </div>
    )
}