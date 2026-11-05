import { useState } from "react"
import OnChange from "./OnChange"
import Cards from "./Cards"
export default function ShowAllPage() {

// Const [array, setArray] = useState([])
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
        // Search for the id of the pressed item
        const index = cart.findIndex((item)=> item.id === id)
        if(index !== -1){
            const updateCart = [...cart] //New Cart instance
            updateCart.splice(index,1)
            setCart(updateCart)
        }

    // const updatedCart = cart.filter((item) => item.id !== id)
    // setCart(updatedCart)
    }

    
    const [formData, setFormData] = useState({
        id:"",
        title:"",
        price:"",
        image:"",
        isAvailable:"",
    })

    function handleOnChange(event){
        setFormData({
            ...formData, [event.target.name] : event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setProducts(
            [
                ...products,formData
            ]
        )
    }

    function handleSearch(event) {
        console.log(`${event.target.name}: ${event.target.value}`);

        const searchedItem = products.filter((product)=>{
            return product.title.toLowerCase().includes(event.target.value.toLowerCase())
        })

        setProducts(searchedItem)
        }
    return (
        <div className="container-content">
            {/* Side Navigation */}
            <section className="menu-container">
                <div class="menu show position-static">
                    <span class="menu-text">Categories</span>

                    {/*Search input field */}
                     <input type="text" name="search" onChange={handleSearch} placeholder="Enter search term..."/>
            
                    <a class="menu-item" href="#">Action</a>
                    <a class="menu-item" href="#">Another action</a>
                    <a class="menu-item" href="#">Something else here</a>

                    <div className="form-div">
                        <form className="form-element" onSubmit={handleSubmit}>
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
                                placeholder="Enter Description" 
                                onChange={handleOnChange}
                            />
                            <button type="submit">Add Item</button>
                        </form>
                    </div>
                </div>
                
                
            </section>

            {/* Content */}
            <section className = " product-section d-flex flex-wrap gap-3 justify-content-flex-start">
                
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
