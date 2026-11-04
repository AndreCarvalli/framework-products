

export default function Cards({ title, price, image, isAvailable}) {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Starting at {price}</p>
                {
                    isAvailable ? (
                       <button onClick={() => alert(`Adding ${title} to cart ...`)} className="btn btn-primary">Buy Now</button>
                    ) : (
                        <button className = "btn btn-secondary disabled"> Out of Stock </button>
                    )
                }
                
            </div>
        </div>
    )
}