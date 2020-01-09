const add = async (req, res) => {
    const db = req.app.get('db')
    const {product_name, product_img, product_price, product_description} = req.body

    const addedProducts = await db.addProduct(product_name, product_img, product_price, product_description)

    res.status(200).json(addedProducts)
}
const edit = async (req, res) => {
    const db = req.app.get('db')
    const {product_id} = req.params
    const {product_name, product_img, product_price, product_description} = req.body

    const updatedItem = await db.updateItem(product_id, product_name, product_img, product_price, product_description)
    res.status(200).json(updatedItem)

}
const deleteProduct = async (req, res) => {
    const db = req.app.get('db')
    const {product_id} = req.params

    const deletedProduct = await db.deleteProduct(product_id)
    res.status(200).json(deletedProduct)
}

module.exports = {
    add,
    edit,
    deleteProduct
}

