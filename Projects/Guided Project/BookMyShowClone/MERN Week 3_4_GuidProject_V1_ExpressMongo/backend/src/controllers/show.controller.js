//created crud operation function with req,res and exported it
const { getShow } = require("../services/show.service");
const showService=require("../services/show.services");

//create show:admin
exports.createShow=async (req,res,next) => {
    try{
        const show=await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"show created succcessfully",
            data:show,
        });

    }
    catch(error){
        next(error);

    }
    
}
//get shows
exports.getShows=async (req,res,next) => {
    try{
        const shows=await showService.getShows(req.query);
        res.status(200).json({
            success:true,
            message:"show fetched succcessfully",
            data:show,
        });

    }
    catch(error){
        next(error);

    }
    
}
//get single show
exports.getShowById=async (req,res,next) => {
    try{
        const show=await showService.getShowById(req.params.id);
        res.status(200).json({
            success:true,
            message:"show created succcessfully",
            data:shows,
        });

    }
    catch(error){
        next(error);

    }
    
}
//update show
exports.updateShow=async (req,res,next) => {
    try{
        const show=await showService.createShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"show updated succcessfully",
            data:show,
        });

    }
    catch(error){
        next(error);

    }
    
}
//delete show admin
exports.deleteShow=async (req,res,next) => {
    try{
        await showService.deleteShow(req.params.id);
        res.status(200).json({
            success:true,
            message:"show deleted succcessfully",
            data:show,
        });

    }
    catch(error){
        next(error);

    }
    
}
