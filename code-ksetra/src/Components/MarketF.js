"use client"

import { useState } from "react"
import { FaShoppingCart, FaTimes, FaSearch, FaLeaf } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import "./MarketF.css"
import Navbar from "./Navbar"

const products = [
  {
    id: 1,
    name: "Pesticide",
    price: "₹143/kg",
    image: "https://images.unsplash.com/photo-1644101211459-7f9be46fad04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "High-quality organic pesticide for crops",
    farmer: "Kanak Sharma",
  },
  {
    id: 2,
    name: "Fertilisers",
    price: "₹664/kg",
    image: "https://media.istockphoto.com/id/1316675881/photo/hand-holding-agriculture-fertilizer-or-fertiliser-granules-with-background-of-farm-or-field.jpg?s=1024x1024&w=is&k=20&c=Tsp5SAjCQPmNkhswWVvI1u8kPaIBg7IZZi-aoGq0FIM=",
    details: "high quality fertilizers for crops",
    farmer: "Chirag pandit",
  },
  {
    id: 3,
    name: "Barns",
    price: "₹200",
    image: "https://images.unsplash.com/photo-1731012375371-a3dba7300ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "Crisp and sweet apples, handpicked from our orchards.",
    farmer: "Advay Anand",
  },
  {
    id: 4,
    name: "Bannisters",
    price: "₹2500 for rent",
    image: "https://images.unsplash.com/photo-1527846957740-2fe555bc8fc6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "The farm tractor is used for pulling or pushing agricultural machinery or trailers, for plowing, tilling, disking, harrowing, planting, and similar tasks",
    farmer: "G.S Dhakadd",
  },
  {
    id: 5,
    name: "Tractors",
    price: "₹2500/day",
    image: "https://plus.unsplash.com/premium_photo-1678344155179-17f90678aca5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: "The farm tractor is used for pulling or pushing agricultural machinery or trailers, for plowing, tilling, disking, harrowing, planting, and similar tasks.",
    farmer: "Vikram Choudhury",
  },
  {
    id: 6,
    name: "Combined harvaster",
    price: "Contact them",
    image: "https://images.unsplash.com/photo-1533241242276-46a506b40d66?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: " A farmer uses modern agricultural techniques to grow food and cash crops",
    farmer: "Naruto Singh",
  },
  {
    id: 7,
    name: "Workers",
    price: "₹1500/day",
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlbHBlciUyMGZvciUyMGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D",
    details: " A farmer uses modern agricultural techniques to grow food and cash crops.",
    farmer: "Goku singh",
  },
  {
    id: 8,
    name: "Fencing",
    price: "₹400/bag",
    image: "https://media.istockphoto.com/id/2167512951/photo/installation-of-mosquito-netting.jpg?s=1024x1024&w=is&k=20&c=aqbvFvpZsTA8Ky5Y4bEwJbTrvmf-vikV8Z4f0mbebi0=",
    details: "natural or artificial substance containing the chemical elements that improve growth and productiveness of plants",
    farmer: "Piyush Shukhla",
  },
]

const MarketF = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      handleRemoveFromCart(productId)
    } else {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace("₹", "").split("/")[0])
    return sum + price * item.quantity
  }, 0)

  return (
    <div className="market">
      <Navbar/>
      <header className="market-header">
        <div className="logo">
          <FaLeaf className="logo-icon" />
          <h1>FarmConnect</h1>
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search fresh produce..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="cart-container">
          <button className="cart-button" onClick={() => setIsCartOpen(!isCartOpen)}>
            <FaShoppingCart />
            <span className="cart-count">{totalItems}</span>
          </button>
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                className="cart-preview"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h3>Shopping Cart</h3>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <div className="quantity-control">
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveFromCart(item.id)} className="remove-btn">
                      <FaTimes />
                    </button>
                  </div>
                ))}
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <div className="cart-summary">
                    <p>Total: ₹{totalPrice.toFixed(2)}</p>
                    <button className="checkout-btn">Proceed to Checkout</button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main>
        <h2>Fresh Produce from Local Farmers</h2>
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-farmer">By {product.farmer}</p>
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  handleAddToCart(product, e)
                }}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <button className="close" onClick={handleCloseModal}>
                  <FaTimes />
                </button>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="modal-image"
                />
                <h3 className="modal-name">{selectedProduct.name}</h3>
                <p className="modal-price">{selectedProduct.price}</p>
                <p className="modal-farmer">Grown by {selectedProduct.farmer}</p>
                <p className="modal-details">{selectedProduct.details}</p>
                <button className="add-to-cart-btn" onClick={(e) => handleAddToCart(selectedProduct, e)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MarketF