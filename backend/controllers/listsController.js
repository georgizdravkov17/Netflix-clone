const List = require("../models/List");
const { listSchema } = require("../validations/ListValidation");

const getAllLists = async (req, res) => {
   try{ 
     const lists = await List.find();
     res.status(201).json(lists);
   } catch(err){
       res.status(500).json(err);
   }
}

const getListById = async (req, res) => {
    try{ 
        const list = await List.findById(req.params.id);
        res.status(201).json(list);
    } catch(err){
        res.status(500).json(err);
    }
 }

 const createList = async (req, res) => {

    const { title, type, genre, content } = req.body;
    try{ 
        const isListDataValid = await listSchema.validate(req.body);

        if(!isListDataValid){
            res.status(401).json({
                message: "Invalid list data!"
            })
        }

        const newList = new List({
            title,
            type,
            genre,
            content: content ? content: []
        })

        await newList.save();

        res.status(201).json({
            message: "Succesfully created list!",
            list: newList
        })
 
    } catch(err){
        res.status(500).json(err);
    }
 }

 const updateList = async (req, res) => {
    try{ 
        const updatedList = await List.updateOne({_id: req.params.id}, req.body);
        res.status(201).json({
            message: "Successfully updated list",
            updatedList
        });
    } catch(err){
        res.status(500).json(err);
    }
 }

 const deleteList = async (req, res) => {
    try{ 
        const deleteList = await List.deleteOne({_id: req.params.id});
        res.status(201).json({
            message: "Successfully deleted list",
            deleteList
        });
    } catch(err){
        res.status(500).json(err);
    }
 }

 module.exports = {
     getAllLists,
     getListById,
     createList,
     updateList,
     deleteList
 }