import { useState } from "react"
import OnChange from "./OnChange"
import Cards from "./Cards"
export default function ShowAllPage() {

    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Laptop 11 DIY Edition (Intel® Core™ Series 1)",
            price: "$999.99",
            image: "https://static.frame.work/vnhapdfuirbckad88ctfkwlb0hjg",
            isAvailable: true
        },
        {
            id: 2,
            title: "Framework Laptop 12 DIY Edition (Intel® Core™ Series 3)",
            price: "$50.99",
            image: "https://static.frame.work/fzas83nnokn5217ml32noztdtpta",
            isAvailable: false
        },
        {
            id: 3,
            title: "Framework Laptop 13 Pro DIY Edition (AMD Ryzen™ AI 300 Series)",
            price: "$45.99",
            image: "https://static.frame.work/yw64dst6sqdf46t5qjohh9p27oyc",
            isAvailable: true
        },
        {
            id: 4,
            title: "Framework Laptop 14 Pro DIY Edition (Intel® Core™ Series 5)",
            price: "$67.99",
            image: "https://static.frame.work/lww17r689wvgl74tji9p9w6xtp50",
            isAvailable: true,
        }
    ])

    // Cart Use State
    const [cart, setCart] = useState([])

    // Add To Cart Function
    function addToCart(id) {
        const product = products.find((item) => item.id === id)
        setCart([...cart, product])
    }

    // Remove From Cart Function
    function removeFromCart(id) {
        const updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)
    }
    return (
        <div className="container-content">
            {/* Side Navigation */}
            <section className="menu-container">
                <div class="menu show position-static">
                    <span class="menu-text">Categories</span>
                    <OnChange />
                    <a class="menu-item" href="#">Action</a>
                    <a class="menu-item" href="#">Another action</a>
                    <a class="menu-item" href="#">Something else here</a>
                </div>
            </section>

            {/* Content */}
            <section className=" product-section d-flex flex-wrap gap-3 justify-content-flex-start">
                {
                    products.map((product) => (
                        <Cards
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))
                }
            </section>

            {/* cart section on the right of page */}
            <section className="cart-container">
                <h3>Cart</h3>
                <p>Cart Items</p>
                <div>
                    {
                        cart.map((item) => (
                            <div className="card-cart" style={{ width: "100%" }}>
                                <img src={item.image} className="card-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Starting at {item.price}</p>
                                </div>
                                <i onClick={() => removeFromCart(item.id)} className="bi bi-trash"> </i>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
