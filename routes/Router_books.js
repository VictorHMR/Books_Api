import express from "express";
import controller from "../controller/books.js"


const router = express.Router()

router.get("/", controller.listAll)
router.get("/Query", controller.searchId)
router.get("/Get/:name?", controller.searchName)
router.post('/insert', controller.insertBook)
router.delete('/delete', controller.deleteBook)
router.put('/put', controller.updateBook)

router.get("/books", controller.getGoogleBooks)


export default {router}