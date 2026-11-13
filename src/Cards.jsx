
export default function Cards({product, addToCart}) {

    return (    
        <div className="card" style={{width: "16rem"}}>
            <img src={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Starting at {product.price}</p>

                {/* Conditional Rendering */}
                {
                    product.isAvailable ? (
                       <button onClick={() => addToCart(product.id)} className="btn btn-primary"> Buy Now </button>
                    ) : (
                        <button className = "btn btn-warning disabled " style={{color:"red"}}> Out of Stock </button>
                    )
                }    
            </div>
        </div>
    )
}