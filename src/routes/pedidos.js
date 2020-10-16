const express = require("express");
const router = express.Router();
const{
  agregarPedidoProveedor,
  getAllPedidoProveedor
} = require("../controllers/pedidoProveedor");
const {
    agregarPedidoCliente,
    getAllPedidoCliente,
} = require("../controllers/pedido");

router.route("/cliente/agregar").post(agregarPedidoCliente);
router.route("/cliente").get(getAllPedidoCliente);
router.route("/proveedor/agregar").post(agregarPedidoProveedor);
router.route("/proveedor").get(getAllPedidoProveedor);
module.exports = router;
