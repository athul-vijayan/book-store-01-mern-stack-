import  express  from "express";
import { bookModel } from "../models/bookModel.js";

const booksRouter = express.Router()

booksRouter.post('/', async(req, res)=>{
    try{
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(400).send({message:'Please provide all details'})
        }
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book=await bookModel.create(newBook)
        return res.status(200).send(book)

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }

})

// booksRouter.get('/', async (req, res)=>{
//     res.status(200).send({message:"book router connected"})
// })

booksRouter.get('/', async (req, res)=>{
    try{
        const books = await bookModel.find({})
        return res.status(200).json({
            Count : books.length,
            data: books
        })

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

booksRouter.get('/:id', async (req, res)=>{
    try{
        const { id }  = req.params;
        const book = await bookModel.findById(id)
        return res.status(200).json(book)

    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message})
    }
})

booksRouter.put('/:id', async (req, res)=>{
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear){
            res.status(400).json({message:'send all required fields to update'})
        }
        const { id }= req.params
        const result = await bookModel.findByIdAndUpdate(id, req.body)

        if(!result){
            return res.status(404).json({message: 'book not found'})
        }
        return res.status(200).send({message:'book updated successfully'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send({error_message: error.message})
    }
})

booksRouter.delete('/:id', async (req, res)=>{
    try {
        const {id}=req.params;
        const result = await bookModel.findByIdAndDelete(id)
        if(!result){return res.status(404).send({message:'Book not found'})}
        return res.status(200).send({message:'book deleted successfully'})        
    } catch (error) {
        console.log('Error', error.message);
        res.status(500).send({Error_message : error.message})
    }
})

export default booksRouter