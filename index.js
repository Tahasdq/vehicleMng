const express = require('express');
const mongoose = require('mongoose');

var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/Vechcle');

app.listen(3000, ()=>{
    console.log("Server Is Running")
})

// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

const NewOccurance = new mongoose.Schema({
    phone:String,
    Applicant:String,
    Street:String,
    Neighbourhood:String,
    City:String,
    Reference:String,
    Description:String,
    Request:String,
    av_garison:String,
    occurance_Number : Number,
    occurance_Code : Number,
    Status:String
}
)


const NewGarisson = new mongoose.Schema({
   StaffName : String,
   VehcleName : String,
   Status:Boolean
}
)

const StaffSchema = new mongoose.Schema({
    Name:String,
    SurName:String,
    WarName:String,
    Status:Boolean
}
)

const VechcleSchema = new mongoose.Schema({
    VehicleNumber:Number,
    Plate:String,
    Brand:String,
	Model:Number,    
    Status:Boolean
}
)           

const ApplicantSchema= new mongoose.Schema({
    Name:String,
    CPF:Number,
    Address:String,
    Refrences:String
}
)           

const StreetSchma = new mongoose.Schema({
    Stret: String,
    ZipCode: String,
    Neigbourhood: String,
    City: String
}
)   

const occuranceSchema =new mongoose.Schema({
    Code: String,
    Description: String,
    OBS: String,
}
)



const StaffModel = mongoose.model("staffs",StaffSchema)
const VechcleModel = mongoose.model("vehcle",VechcleSchema)
const ApplicantsModel = mongoose.model("Applicant",ApplicantSchema)
const StrretModel = mongoose.model("Street",StreetSchma)
const occuranceModel = mongoose.model("Occurance",occuranceSchema)
const NewOccuranceModel = mongoose.model("NewOccurance",NewOccurance)
const NewGarissonModel = mongoose.model("NewGarisson",NewGarisson)



// For Post

app.post("/newGarisson", async(req,res) =>{
    const data = await NewGarissonModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})


app.post("/newOccurance", async(req,res) =>{
    const data = await NewOccuranceModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

app.post("/postoccurance", async(req,res) =>{
    const data = await occuranceModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

app.post("/poststreet", async(req,res) =>{
    const data = await StrretModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

app.post("/postApplicant", async(req,res) =>{
    const data = await ApplicantsModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

app.post("/postStaff", async(req,res) =>{
    const data = await StaffModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

app.post("/postVehicle", async(req,res  ) =>{
    const data = await VechcleModel.create(req.body)
    res.json("Saved")

    // console.log(req.body)
    // res.send(req.body)
})

// For Get

app.get("/newGarissonData",(req,res) =>{
    NewGarissonModel.find({}).then(function(NewGarisson){
            console.log(res.json(NewGarisson))
            
    }).catch(function(err){
        console.log(err)
    })
})



app.get("/getnewoccuranceAll",(req,res) =>{
    NewOccuranceModel.find({}).then(function(NewOccurance){
            console.log(res.json(NewOccurance))
            
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getnewoccuranceAllStatus",(req,res) =>{

    const { Status } = req.query;

    NewOccuranceModel.find({Status:"1"}).then(function(NewOccurance){
            console.log(res.json(NewOccurance))
            
    }).catch(function(err){
        console.log(err)
    })
})

// get with id
app.get("/getnewoccuranceAll/:id",(req,res) =>{
    const id = req.params.id

    NewOccuranceModel.findById(id).then(function(NewOccurance){
            console.log(res.json(NewOccurance))
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getnewoccurance",(req,res) =>{
    NewOccuranceModel.countDocuments().then(function(NewOccurance){
            console.log(res.json(NewOccurance))
            
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getoccurance",(req,res) =>{
    occuranceModel.find({}).then(function(Occurance){
            res.json(Occurance)
    }).catch(function(err){
        console.log(err)
    })
})

app.get("/getStreet",(req,res) =>{
    StrretModel.find({}).then(function(Street){
            res.json(Street)
    }).catch(function(err){
        console.log(err)
    })
})

// app.get("/getApplicants",(req,res) =>{
//     StrretModel.find({}).then(function(Applicant){
//             res.json(Applicant)
//     }).catch(function(err){
//         console.log(err)
//     })
// })

app.get("/getApplicants",(req,res) =>{
    ApplicantsModel.find({}).then(function(Applicant){
            res.json(Applicant)
    }).catch(function(err){
        console.log(err)
    })
})

app.get("/getVehcle",(req,res) =>{
    VechcleModel.find({}).then(function(vehcle){
            res.json(vehcle)
    }).catch(function(err){
        console.log(err)
    })
})

app.get("/getVehcleStatus",(req,res) =>{
    VechcleModel.find({Status:true}).then(function(vehcle){
            res.json(vehcle)
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getStaffStatus",(req,res) =>{
    StaffModel.find({Status:true}).then(function(staffs){
            res.json(staffs)
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getStaff",(req,res) =>{
    StaffModel.find({}).then(function(staffs){
            res.json(staffs)
    }).catch(function(err){
        console.log(err)
    })
})



// put 
app.put("/updateVehicle/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:false};

    VechcleModel.findByIdAndUpdate(id, updateFields, { new: true })
    .then((vehicle) => {
      if (!vehicle) {
        return res.status(404).json({ error: 'vehicle not found' });
      }
      res.json(vehicle);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});



app.put("/updateStaff", async (req, res) => {
    try {
        const dataArray = req.body.dataArray;
        console.log('Array of IDs:', dataArray);

        // Update the status field of documents in the Staff collection
        const updateResult = await StaffModel.updateMany(
            { _id: { $in: dataArray } }, // Find documents with IDs in dataArray
            { $set: { Status: false } } // Update status field to false
        );

        console.log('Update result:', updateResult);

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// Garrson

app.get("/getGarrison",(req,res) =>{
    NewGarissonModel.find({Status:true}).then(function(NewGarisson){
            res.json(NewGarisson)
    }).catch(function(err){
        console.log(err)
    })
})

app.put("/updataGarrison/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:false};

    NewGarissonModel.findByIdAndUpdate(id, updateFields, { new: true })
    .then((NewGarisson) => {
      if (!NewGarisson) {
        return res.status(404).json({ error: 'vehicle not found' });
      }
      res.json(NewGarisson);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get("/getGarrisonFalse",(req,res) =>{
    NewGarissonModel.find({Status:false}).then(function(NewGarisson){
            res.json(NewGarisson)
    }).catch(function(err){
        console.log(err)
    })
})

app.put("/occuranceDispatch/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:'0'};

    NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: '1' })
    .then((NewOccurance) => {
      if (!NewOccurance) {
        return res.status(404).json({ error: 'vehicle not found' });
      }
      res.json(NewOccurance);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});








