import { useEffect, useState } from "react"
import Cards from "./Cards"
export default function ShowAllPage() {

    // Const [array, setArray] = useState([])
    const [products, setProducts] = useState([])

    //Fetching from db.json
    useEffect(() => {
        fetch('http://localhost:4001/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    // Cart Use State
    const [cart, setCart] = useState([])


    // Add To Cart Function
    function addToCart(id) {

        const product = products.find((item) => item.id === id)
        fetch('http://localhost:3000/carts', {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setCart(data) 
            })


        // fetch('http://localhost:3000/carts')
        //     .then(res => res.json())
        //     .then(data => {
        //          console.log(data); 
        //     })  

        setCart([...cart, product])
    }

    // Remove From Cart Function
    function removeFromCart(id) {
        // Search for the id of the pressed item
        const index = cart.findIndex((item) => item.id === id)
        if (index !== -1) {
            const updateCart = [...cart] //New Cart instance
            updateCart.splice(index, 1)
            setCart(updateCart)
        }

        // const updatedCart = cart.filter((item) => item.id !== id)
        // setCart(updatedCart)
    }

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        price: "",
        image: "",
        isAvailable: "",
    })

    function handleOnChange(event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value //Adding another key:value pair in formData object
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setProducts(
            [
                ...products, formData
            ]
        )
    }

    function handleSearch(event) {
        const searchedItem = products.filter((product) => {
            return product.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
        })

        setProducts(searchedItem)
    }
    return (
        <div className="container-content">
            {/* Side Navigation */}
            <aside className="menu-container">
                <div className="menu show position-static">

                    {/*Search Input Field */}
                    <input className="search" type="text" name="search" onChange={handleSearch} placeholder= "Search ..." />
                    <span className="menu-text">Categories</span>

                    <hr style={{border:"0.2px dashed gray"}}/>

                    <a className="menu-item" active href="#">View All</a>
                    <a className="menu-item" href="#">Framework Laptop</a>
                    <a className="menu-item" href="#">Mainboards</a>
                    <a className="menu-item" href="#">Expansion cards</a>
                    <a className="menu-item" href="#">Memory Storage</a>
                    <a className="menu-item" href="#">Keyboards</a>
                    <a className="menu-item" href="#">Parts</a>
                    <a className="menu-item" href="#">Customization</a>
                    <a className="menu-item" href="#">Tools</a>

                    <div className="form-div">
                        <h5>Add New Product</h5>
                        <form className="form-element" onSubmit={handleSubmit}>
                            <input
                                className="form-input"
                                type="text"
                                name="id"
                                value={formData.id}
                                placeholder="Enter Id"
                                onChange={handleOnChange}
                            />
                            <input
                                className="form-input"
                                name="title"
                                value={formData.title}
                                placeholder="Enter Title"
                                onChange={handleOnChange}
                            />
                            <input
                                className="form-input"
                                name="price"
                                value={formData.price}
                                placeholder="Enter Price"
                                onChange={handleOnChange}
                            />
                            <input
                                className="form-input"
                                name="image"
                                value={formData.image}
                                placeholder="Paste Image Link"
                                onChange={handleOnChange}
                            />
                            <input
                                className="form-input"
                                name="isAvailable"
                                value={formData.isAvailable}
                                placeholder="Product is available"
                                onChange={handleOnChange}
                            />
                            <button type="submit">Add Item</button>
                        </form>
                    </div>
                </div>


            </aside>

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
                <h3>My Cart</h3>
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
