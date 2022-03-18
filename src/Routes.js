var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const {postRefreal, getRefreal, getTransaction, postTransaction, getTransactionDetail,postEvents, treeReferral, getTreeRef} = require("./index")

router.route("/takeRefral").post(postRefreal)
router.route("/getRefral").post(getRefreal)
router.route("/getTransactionHash").post(getTransaction)
router.route("/postTransactionDetail").post(postTransaction)
router.route("/getTransactionDetail").post(getTransactionDetail)
router.route("/postEvents").post(postEvents)
router.route("/treeReferral").post(treeReferral)
router.route("/getTreeRef").post(getTreeRef)







module.exports = router;