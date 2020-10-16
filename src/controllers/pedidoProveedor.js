const {Op,QueryTypes} = require('sequelize')
const {
    Pedido,
    DetallePedido,
    Producto,
    PedidoProveedor,
} = require('../sequelize')
const asyncHandler = require("../middlewares/asyncHandler")



exports.agregarPedidoProveedor = asyncHandler(async (req, res, next) => {
    console.log(req.body)

    const pedido = await PedidoProveedor.create(req.body, {include: [
        {association: PedidoProveedor.Pedido, include: [
            {association: Pedido.DetallePedido,
                include: [{association: DetallePedido.Producto}]}
        ]}
    ]});


    console.log(pedido.Pedido)
    await pedido.save();

    res.status(200).json({ success: true, data:pedido });
})
