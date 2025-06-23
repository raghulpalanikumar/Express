const ragu = require('../models/userModel');
exports.getRoute = async(req,res)=>{

    const userData = await ragu.find();
    res.status(201).json({data:userData})
}
exports.postRoute = async (req,res)=>{
    const{username,password} = req.body;
    const exist = await ragu.findOne({username});
    if(exist){
         return res.status(401).json({message:"User already exists"})
    }
    const newUser = new ragu({username,password})
    await newUser.save();
    res.status(201).json({message:"User created successfully"})
}
//particular id kuduthurukum id kuduakanum
exports.putRoute = async (req, res) => {
    const { username, password } = req.body;
    try {
        const update = await ragu.findByIdAndUpdate(req.params.id, { username, password }, { new: true });
        if (!update) {
            return res.status(401).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", data: update });
    } catch (err) {
        res.status(500).json({ message: "Error updating user", error: err.message });
    }
};
//work mudiyura var wait panum
exports.deleteRoute = async (req,res)=>{
    const deleteData = await ragu.findByIdAndDelete(req.params.id);
    if(!deleteData){
        return res.status(401).json({message:"User not found"})
    }
  res.status(201).json({message:"User deleted successfully"})
}   