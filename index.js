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
    occurance_Code : String,
    Status:String,
    Time:String,
    Arrivaltime:String,
    registrationDate: { type: Date, default: Date.now } 
}
)


const NewGarisson = new mongoose.Schema({
   StaffName : String,
   VehcleName : String,
   Av_garison:String, 
   Status:Boolean
}
)

const StaffSchema = new mongoose.Schema({
    Name:String,
    SurName:String,
    WarName:String,
    Status:Boolean
})

const VechcleSchema = new mongoose.Schema({
    VehicleNumber:String,
    Plate:String,
    Brand:String,
	  Model:String,    
    Status:Boolean
})           

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


app.post("/newOccurance", async (req, res) => {
  // Check if req.body.time is empty
  if (!req.body.Time) {
      // Add current time in ISO format to req.body.time
      req.body.Time = new Date().toISOString();
  }

  try {
      const data = await NewOccuranceModel.create(req.body);
      res.json("Saved");
  } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "An error occurred while saving data" });
  }
});

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
    NewGarissonModel.find().then(function(NewGarisson){
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

// used in dashboard 
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

    VechcleModel.findByIdAndUpdate(id, updateFields, { new: true }) //cherkhani
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



// Garrson used in dashboard
app.get("/getGarrisonTrue",(req,res) =>{
    NewGarissonModel.find({Status:true}).then(function(NewGarisson){
            res.json(NewGarisson)
    }).catch(function(err){
        console.log(err)
    })
})

app.get("/getGarrisonFalse",(req,res) =>{
    NewGarissonModel.find({Status:false}).then(function(NewGarisson){
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

app.put("/occuranceDispatchGarison",async(req,res) =>{
    const dataArray = req.body.dataArray;
    console.log('Array of IDs:', dataArray);
    const id = dataArray[0];
    const updateFields = {av_garison : dataArray[1]};


    // console.log("av_garison is " , av_garison);
    
    // Assuming you want to update specific fields in the Staff model
    

    


    NewOccuranceModel.findByIdAndUpdate(id, updateFields ,{av_garison:""})
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


app.get("/getGarrison",(req,res) =>{
    NewGarissonModel.find({Status:true}).then(function(NewGarisson){
            res.json(NewGarisson)
    }).catch(function(err){
        console.log(err)
    })
})


app.get("/getnewoccuranceAllStatus/:id",(req,res) =>{
    const id = req.params.id
    NewOccuranceModel.find({ _id: id })
    .then(function (garrison) {
        if (!garrison) {
            return res.status(404).json({ error: 'Garrison not found' });
        }
        // Assuming "aversion_garrion" is a key in the garrison object
        // console.log("garssion is " , garrison)
        const aversion_garrion = garrison[0].av_garison;
        console.log(aversion_garrion)
        res.json(aversion_garrion );
    })
    .catch(function (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
})



app.get("/getnewoccuranceOpenCases",(req,res) =>{
    const statusValues = ["0", "1" ,"2"]; // Array containing status values 0 ,1, 2
  
    NewOccuranceModel.find({ Status: { $in: statusValues } })
      .then(function (NewOccurance) {
        res.json(NewOccurance);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
})

//used in Dashboard and closing
app.get("/getnewoccuranceAllStatusWithZeroAndTwo", (req, res) => {
    const statusValues = ["0", "2"]; // Array containing status values 0 and 2
  
    NewOccuranceModel.find({ Status: { $in: statusValues } })
      .then(function (NewOccurance) {
        res.json(NewOccurance);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
app.get("/getnewoccuranceAllStatusWithZero", (req, res) => {
    const statusValues = ["0"]; // Array containing status values 0 and 2
  
    NewOccuranceModel.find({ Status: { $in: statusValues } })
      .then(function (NewOccurance) {
        res.json(NewOccurance);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  





//get all staff true or false
app.get("/getAllStaff",(req,res) =>{
    StaffModel.find().then(function(staffs){
            res.json(staffs)
    }).catch(function(err){
        console.log(err)
    })
})











 


app.put("/occuranceDispatcharrive/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:'2'};

    NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: '0' })
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




app.put("/occuranceclosed/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:'3'};

    NewOccuranceModel.findByIdAndUpdate(id, updateFields, { Status: '0' })
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



///closing occurence and making garission available

app.put("/updataGarrisonToTrue/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id); //new oocurences id
    // Assuming you want to update specific fields in the Staff model
    NewOccuranceModel.findById(id).then((doc)=>{
        if(!doc){
            return res.status(404).json({ error: 'occurence not found' });
        }
        const updateFields = {Status:true};
        NewGarissonModel.findOneAndUpdate({ Av_garison: doc.av_garison }, updateFields, { new: false })
        .then((NewGarisson) => {
          if (!NewGarisson) {
            return res.status(404).json({ error: 'data is updated' });
          }
          res.json(NewGarisson);
        })
        
    
    })




     




     
    // NewGarissonModel.findByIdAndUpdate(av_, updateFields, { Status: false })
    // .then((NewGarisson) => {
    //   if (!NewGarisson) {
    //     return res.status(404).json({ error: 'vehicle not found' });
    //   }
    //   res.json(NewGarisson);
    // })
    // .catch((err) => {
    //   console.log(err);
    //   res.status(500).json({ error: 'Internal Server Error' });
    // });
});

//gettinng all garissons

app.get("/getGarrisonAll",(req,res) =>{
    NewGarissonModel.find().then(function(NewGarisson){
            res.json(NewGarisson)
    }).catch(function(err){
        console.log(err)
    })
})


//SearchBar Api

app.get("/SearchedOccurences/:id",(req,res) =>{

    const data =req.params.id.toString()

    NewOccuranceModel.find({ Applicant:data  })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
})




//Time setted 

app.put("/occuranceDispatchTime/:id",(req,res) =>{
    const id = req.params.id;
    console.log("id is " , id);
    // Assuming you want to update specific fields in the Staff model
    

     const dateNow = new Date();
  
     // Extract hours and minutes
    //  const hours = dateNow.getHours().toString().padStart(2, '0');
    //  const minutes = dateNow.getMinutes().toString().padStart(2, '0');
   
     // Construct the time string in HH:mm format
    //  const formattedTime = `${hours}:${minutes}`;
     const isoDateTime = dateNow.toISOString();

     const updateFields = { Time: isoDateTime };



    NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: true })
    .then((updated) => {
      if (!updated) {
        return res.status(404).json({ error: 'vehicle not found' });
      }
      res.json(updated);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

























app.put("/getnewoccuranceAllStatusWithZero/:id",(req,res) =>{
    const id = req.params.id;
    console.log("api hitted for arrival time")
    const dateNow = new Date();
  
    const isoDateTime = dateNow.toISOString();

    const updateFields = { Arrivaltime: isoDateTime };


    NewOccuranceModel.findByIdAndUpdate( id,updateFields, { new: true })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
})




app.put("/updataGarrisonStat",(req,res) =>{
    const {VehcleName} = req.body;

    console.log("VehcleName is " , VehcleName);
    // Assuming you want to update specific fields in the Staff model
     const updateFields = {Status:true};

     NewGarissonModel.findOneAndUpdate(VehcleName, updateFields, { new: false })
    .then((NewGarisson) => {
      if (!NewGarisson) {
        return res.status(404).json({ error: 'av_garison not found' });
      }
      res.json(NewGarisson);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});










//Dashboard backend for total occurencnes in a day ,month and yearn


// Get occurrence count for today
app.get('/occurrences/today', async (req, res) => {
    try {
      const today = new Date();
      const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
      const count = await NewOccuranceModel.countDocuments({ registrationDate: { $gte: startOfDay, $lt: endOfDay } });
      res.json({ count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Get occurrence count for this month
 app.get('/occurrences/month', async (req, res) => {
    try {
      const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const endOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
      const count = await NewOccuranceModel.countDocuments({ registrationDate: { $gte: startOfMonth, $lt: endOfMonth } });
      res.json({ count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  // Get occurrence count for this year
  app.get('/occurrences/year', async (req, res) => {
    try {
      const startOfYear = new Date(new Date().getFullYear(), 0, 1);
      const endOfYear = new Date(new Date().getFullYear() + 1, 0, 1);
      const count = await NewOccuranceModel.countDocuments({ registrationDate: { $gte: startOfYear, $lt: endOfYear } });
      res.json({ count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });



  app.delete("/deleteGarrisonStatus",(req,res) =>{
    NewGarissonModel.deleteMany()
       .then((result) => {
         res.json({ deletedCount: result.deletedCount });
       })
       .catch((err) => {
         console.error(err);
         res.status(500).json({ error: 'Internal Server Error' });
       });
   })
   
   
   
   app.put("/statustrueStaff",(req,res) =>{
      
       // Assuming you want to update specific fields in the Staff model
        const updateFields = {Status:true};
        
       StaffModel.updateMany( { Status: false },updateFields)
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
   
   app.put("/statustrueVehcle",(req,res) =>{
      
       // Assuming you want to update specific fields in the Staff model
        const updateFields = {Status:true};
        
       VechcleModel.updateMany({ Status: false },updateFields)
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