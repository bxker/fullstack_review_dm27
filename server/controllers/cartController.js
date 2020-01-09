const addToCart = async (req, res) => {
    const db = req.app.get('db')
    const {product_id} = req.params
    const {user_id} = req.session.user

    const cartItem = await db.addToCart(product_id, user_id)

    res.status(200).json(cartItem)

}

const getCart = async (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user

    const cart = await db.getCart(user_id)
    res.status(200).json(cart)
}

module.exports ={
    addToCart,
    getCart
}