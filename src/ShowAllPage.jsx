import { useEffect, useState } from "react"
import OnChange from "./OnChange"
import Cards from "./Cards"
export default function ShowAllPage() {

    // Const [array, setArray] = useState([])
    const [products, setProducts] = useState([])

    //Fetching from db.json
    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])


    // Cart Use State
    const [cart, setCart] = useState([])


    // Add To Cart Function
    function addToCart(id) {

        const product = products.find((item) => item.id === id)
    
        fetch('http://localhost:3000/carts', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data); 
            setCart(data) 
        })
       

        // fetch('http://localhost:3000/carts')
        //     .then(res => res.json())
        //     .then(data => {
        //          console.log(data); 
        //     })  

    // setCart([...cart, product])
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


    // 

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        price: "",
        image: "",
        isAvailable: "",
    })

    function handleOnChange(event) {
        setFormData({
            ...formData, [event.target.name] : event.target.value //Adding another key:value pair in formData object
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
            <section className="menu-container">
                <div class="menu show position-static">
                    <span class="menu-text">Categories</span>

                    {/*Search Input Field */}
                    <input type="text" name="search" onChange={handleSearch} placeholder="Enter search term..." />

                    <a class="menu-item" href="#">Action</a>
                    <a class="menu-item" href="#">Another action</a>
                    <a class="menu-item" href="#">Something else here</a>

                    <div className="form-div">
                        <form className="form-element" onSubmit = {handleSubmit}>
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                placeholder="Enter Id"
                                onChange={handleOnChange}
                            />
                            <input
                                name="title"
                                value={formData.title}
                                placeholder="Enter Title"
                                onChange={handleOnChange}
                            />
                            <input
                                name="price"
                                value={formData.price}
                                placeholder="Enter Price"
                                onChange={handleOnChange}
                            />
                            <input
                                name="image"
                                value={formData.image}
                                placeholder="Paste Image Link"
                                onChange={handleOnChange}
                            />
                            <input
                                name="isAvailable"
                                value={formData.isAvailable}
                                placeholder="Product is available"
                                onChange={handleOnChange}
                            />
                            <button type="submit">Add Item</button>
                        </form>
                    </div>
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
