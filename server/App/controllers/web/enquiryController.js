const enquiryModel = require('../../models/enquiry.model');


// Controller to insert a new enquiry record
let enquiryInsert=(req,res)=>{
  let {name, email, phone, message} = req.body;
   let enquiry=new enquiryModel({
    name,
    email,
    phone,
    message
   });
   enquiry.save().then(()=>{
    res.send({
        status:200,
        message:"Enquiry Added Successfully"
    })
   }).catch((err)=>{
    res.send({
        status:500,
        message:"Error while saving enquiry",
        error:err.message
    })
   })
}

let enquiryList= (req,res)=>{
    enquiryModel.find().then((enquiryList)=>{
        res.send({
            status:200,
            message:"Enquiry List",
            enquiryList
        })
    }).catch((err)=>{
        res.send({
            status:500,
            message:"Error while fetching enquiry list",
             error:err.message
        })
    })

}


let enquiryDelete = (req, res) => {
    let id = req.params.id;
    enquiryModel.findByIdAndDelete(id).then((result) => {
      res.send({
        status: 200,
        message: "Enquiry Deleted Successfully",
      });
    }).catch((err) => {
      res.send({
        status: 500,
        message: "Error while deleting enquiry",
        error: err.message,
      });
    });
}
  
let enquirySingleRow=async (req,res)=>{
  let enId=req.params.id;
  let enquiry=await enquiryModel.findOne({_id:enId});
  res.send({
    status:200,
    message:"Enquiry Details",
    enquiry
  })
}

let enquiryUpdate=async(req,res)=>{
  let enquiryId=req.params.id;
  let {name, email, phone, message} = req.body;
  let updateObj={
   name,
   email,
   phone,
   message
  };
  let updateRes=await enquiryModel.updateOne({_id:enquiryId},updateObj) ;
 
  res.send({
    status:200,
    message:"Enquiry Updated Successfully",
    updateRes
    })

      
}
module.exports={enquiryInsert,enquiryList,enquiryDelete,enquirySingleRow,enquiryUpdate};