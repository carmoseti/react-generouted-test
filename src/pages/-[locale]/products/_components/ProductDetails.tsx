export default function ProductDetails(){
    return (
        <div style={{
            padding: 8,
            background: 'linear-gradient(#e66465, #9198e5)'
        }}>
            <h2>Product Details / Specifications</h2>
            <ol>
                <li>Product Name</li>
                <li>Remaining Items</li>
                <li>Cost</li>
            </ol>
            <button>Add to Cart</button>
        </div>
    )
}