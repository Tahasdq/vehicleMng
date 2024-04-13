const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const pdfTemplate = require('./template.js');
const bodyParser = require('body-parser');
const pdf = require('html-pdf')
const cors = require("cors");
const fs = require('fs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Update the MongoDB connection URI to point to your MongoDB Atlas cluster
// Replace <password> with your actual MongoDB Atlas database password
const uri = "mongodb+srv://taha:taha12345678@cluster0.aw5siyq.mongodb.net/";
mongoose.connect(uri, { dbName: 'VehicleMng' ,useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Is Running");
});



// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

const NewOccurance = new mongoose.Schema({
  phone: String,
  Applicant: String,
  Street: String,
  Neighbourhood: String,
  City: String,
  Reference: String,
  Description: String,
  Request:String,  
  av_garison: [],
  occurance_Number: Number,
  occurance_Code: String,
  Status: String,
  Time: String,
  Arrivaltime: String,
  MadeBy:String,
  DispatchBy:String,
  InformedOfArrivalBy:String,
  ClosedBy:String,
  registrationDate: { type: Date, default: Date.now }
}
)


const NewGarisson = new mongoose.Schema({
  StaffName: String,
  VehcleName: String,
  Av_garison: String,
  Status: Boolean,
});

const StaffSchema = new mongoose.Schema({
  Name: String,
  SurName: String,
  WarName: String,
  Status: Boolean
})

const VechcleSchema = new mongoose.Schema({
  VehicleNumber: String,
  Plate: String,
  Brand: String,
  Model: String,
  Status: Boolean,
});

const ApplicantSchema = new mongoose.Schema({
  Name: String,
  CPF: String,
  Address: String,
  Refrences: String,
});

const StreetSchma = new mongoose.Schema({
  Stret: String,
  ZipCode: String,
  Neigbourhood: String,
  City: String
}
)

const occuranceSchema = new mongoose.Schema({
  Code: String,
  Description: String,
  OBS: String,
});

const ResigisterNormalUserSchema = new mongoose.Schema({
  username: String,
  password: String,
  designation: String,
  isAdmin: Boolean,
});
const reportSchema = new mongoose.Schema({
  IdOfOccurence:String,
  formFields:Object,
  address:String,
  description:String
  
});

const StaffModel = mongoose.model("staffs", StaffSchema);
const VechcleModel = mongoose.model("vehcle", VechcleSchema);
const ApplicantsModel = mongoose.model("Applicant", ApplicantSchema);
const StrretModel = mongoose.model("Street", StreetSchma);
const occuranceModel = mongoose.model("Occurance", occuranceSchema);
const NewOccuranceModel = mongoose.model("NewOccurance", NewOccurance);
const NewGarissonModel = mongoose.model("NewGarisson", NewGarisson);
const reportSchemaModel = mongoose.model("reportSchema",reportSchema);
const ResigisterNormalUserSchemaModel = mongoose.model(
  "ResigisterNormalUserSchema",
  ResigisterNormalUserSchema
);

app.get("/", async (req, res) => {
  
  res.json("helloword");

  // console.log(req.body)
  // res.send(req.body)
});




// For Post





app.post("/newGarisson", async (req, res) => {
  const data = await NewGarissonModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

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

app.post("/postoccurance", async (req, res) => {
  const data = await occuranceModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

app.post("/poststreet", async (req, res) => {
  const data = await StrretModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

app.post("/postApplicant", async (req, res) => {
  const data = await ApplicantsModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

app.post("/postStaff", async (req, res) => {
  const data = await StaffModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

app.post("/postVehicle", async (req, res) => {
  const data = await VechcleModel.create(req.body);
  res.json("Saved");

  // console.log(req.body)
  // res.send(req.body)
});

// For Get

app.get("/newGarissonData", (req, res) => {
  NewGarissonModel.find()
    .then(function (NewGarisson) {
      console.log(res.json(NewGarisson));
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getnewoccuranceAll", (req, res) => {
  const statusValues = ["0", "2"]; // Array containing status values 0 and 2

  NewOccuranceModel.find({ Status: { $in: statusValues } })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });



  // NewOccuranceModel.find({})
  //   .then(function (NewOccurance) {
  //     console.log(res.json(NewOccurance));
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
});

app.get("/getnewoccuranceAllStatus", (req, res) => {
  const { Status } = req.query;

  NewOccuranceModel.find({ Status: "1" })
    .then(function (NewOccurance) {
      console.log(res.json(NewOccurance));
    })
    .catch(function (err) {
      console.log(err);
    });
});

// get with id
app.get("/getnewoccuranceAll/:id", (req, res) => {
  const id = req.params.id;

  NewOccuranceModel.findById(id)
    .then(function (NewOccurance) {
      console.log(res.json(NewOccurance));
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getnewoccurance", (req, res) => {
  NewOccuranceModel.countDocuments()
    .then(function (NewOccurance) {
      console.log(res.json(NewOccurance));
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getoccurance", (req, res) => {
  occuranceModel
    .find({})
    .then(function (Occurance) {
      res.json(Occurance);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getStreet", (req, res) => {
  StrretModel.find({})
    .then(function (Street) {
      res.json(Street);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// app.get("/getApplicants",(req,res) =>{
//     StrretModel.find({}).then(function(Applicant){
//             res.json(Applicant)
//     }).catch(function(err){
//         console.log(err)
//     })
// })


app.get("/getApplicants", (req, res) => {
  ApplicantsModel.find({})
    .then(function (Applicant) {
      res.json(Applicant);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// used in dashboard
app.get("/getVehcle", (req, res) => {
  VechcleModel.find({})
    .then(function (vehcle) {
      res.json(vehcle);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getVehcleStatus", (req, res) => {
  VechcleModel.find({ Status: true })
    .then(function (vehcle) {
      res.json(vehcle);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getStaffStatus", (req, res) => {
  StaffModel.find({ Status: true })
    .then(function (staffs) {
      res.json(staffs);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getStaff", (req, res) => {
  StaffModel.find({})
    .then(function (staffs) {
      res.json(staffs);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// put
app.put("/updateVehicle/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id);
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: false };

  VechcleModel.findByIdAndUpdate(id, updateFields, { new: true }) //cherkhani
    .then((vehicle) => {
      if (!vehicle) {
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(vehicle);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.put("/updateStaff", async (req, res) => {
  try {
    const dataArray = req.body.dataArray;
    console.log("Array of IDs:", dataArray);

    // Update the status field of documents in the Staff collection
    const updateResult = await StaffModel.updateMany(
      { _id: { $in: dataArray } }, // Find documents with IDs in dataArray
      { $set: { Status: false } } // Update status field to false
    );

    console.log("Update result:", updateResult);

    res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Garrson used in dashboard
app.get("/getGarrisonTrue", (req, res) => {
  NewGarissonModel.find({ Status: true })
    .then(function (NewGarisson) {
      res.json(NewGarisson);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/getGarrisonFalse", (req, res) => {
  NewGarissonModel.find({ Status: false })
    .then(function (NewGarisson) {
      res.json(NewGarisson);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// app.put("/updataGarrison/:id",(req,res) =>{
//     const id = req.params.id;
//     console.log("id is " , id);
//     // Assuming you want to update specific fields in the Staff model
//      const updateFields = {Status:false};

//     NewGarissonModel.findByIdAndUpdate(id, updateFields, { new: true })
//     .then((NewGarisson) => {
//       if (!NewGarisson) {
//         return res.status(404).json({ error: 'vehicle not found' });
//       }
//       res.json(NewGarisson);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });

app.get("/getGarrisonFalse", (req, res) => {
  NewGarissonModel.find({ Status: false })
    .then(function (NewGarisson) {
      res.json(NewGarisson);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.put("/occuranceDispatch/:id", (req, res) => {
  const {DispatchBy} = req.body;
  const id = req.params.id;
  console.log("id is ", id);

  const updateFields = { Status: "0" ,DispatchBy:DispatchBy };

  NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: "1" })
    .then((NewOccurance) => {
      if (!NewOccurance) {
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(NewOccurance);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.put("/occuranceDispatchGarison/:id", async (req, res) => {
  const id = req.params.id
  const dataArray = req.body.dataArray;
  console.log('Array of IDs:', dataArray);
  const updateFields = { av_garison: dataArray };

  // console.log("av_garison is " , av_garison);

  // Assuming you want to update specific fields in the Staff model

  NewOccuranceModel.findByIdAndUpdate(id, updateFields, { av_garison: [] })
    .then((NewOccurance) => {
      if (!NewOccurance) {
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(NewOccurance);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/getGarrison", (req, res) => {
  NewGarissonModel.find({ Status: true })
    .then(function (NewGarisson) {
      res.json(NewGarisson);
    })
    .catch(function (err) {
      console.log(err);
    });
});


app.get("/getnewoccuranceAllStatus/:id", (req, res) => {
  const id = req.params.id
  NewOccuranceModel.find({ _id: id })
    .then(function (garrison) {
      if (!garrison) {
        return res.status(404).json({ error: 'Garrison not found' });
      }
      // Assuming "aversion_garrion" is a key in the garrison object
      // console.log("garssion is " , garrison)
      const aversion_garrion = garrison[0];
      console.log(aversion_garrion)
      res.json(aversion_garrion);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/getnewoccuranceOpenCases", (req, res) => {
  const statusValues = ["0", "1", "2"]; // Array containing status values 0 ,1, 2

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
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/getnewoccuranceAllStatusWithZero", (req, res) => {
  const statusValues = ["0"]; // Array containing status values 0 

  NewOccuranceModel.find({ Status: { $in: statusValues } })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

//get all staff true or false
app.get("/getAllStaff", (req, res) => {
  StaffModel.find().then(function (staffs) {
    res.json(staffs)
  }).catch(function (err) {
    console.log(err)
  })
})



//occurnce garision arrived 

app.put("/occuranceDispatcharrivegarrison/:id", (req, res) => {
  const OccurenceId = req.params.id
  const { garissonIds } = req.body
  console.log("garsion are ", garissonIds);
  console.log("occurenceid is ", OccurenceId)

  const currentTime = new Date(); // Get the current date and time


  const updateFields = {
    $set: {}
  };
  
  // Constructing the arrayFilters based on garissonIds
  const arrayFilters = garissonIds.map((id, index) => ({ [`elem${index}.id`]: id }));
  
  // Setting the 'disabled' key to true for matching Ids
  garissonIds.forEach(id => {
    updateFields.$set[`av_garison.$[elem${garissonIds.indexOf(id)}].disabled`] = true;
    updateFields.$set[`av_garison.$[elem${garissonIds.indexOf(id)}].ArrivalTime`] = currentTime;
  });

  
  const options = {
    arrayFilters,
    new: true // Return the updated document after update
  };


  NewOccuranceModel.findByIdAndUpdate(OccurenceId, updateFields, options)
    .then(updatedDocument => {
      console.log("Updated document:", updatedDocument);
      res.status(200).json({ message: "Occurrence updated successfully", data: updatedDocument });
      // Respond with updatedDocument or any other desired response
    })
    .catch(error => {
      console.error("Error updating document:", error);
      // Handle error appropriately
      res.status(500).json({ error: "Internal Server Error" });

    });

});

app.get("/getnewoccuranceocurrencesgarissonwithtruedisabled/:id", (req, res) => {
  const OccurrenceId = req.params.id;

  NewOccuranceModel.findById(OccurrenceId)
    .then(occurrence => {
      if (!occurrence) {
        return res.status(404).json({ error: "Occurrence not found" });
      }

      // Filter av_garison array to include only objects with disabled set to true
      const filteredGarison = occurrence.av_garison.filter(item => item.disabled === true);
      console.log("filted item are " , filteredGarison)
      res.status(200).json(filteredGarison);
    })
    .catch(error => {
      console.error("Error retrieving occurrence:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});












app.put("/occuranceDispatcharrive/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id);
  const{ InformedOfArrivalBy} = req.body
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: '2', InformedOfArrivalBy :InformedOfArrivalBy};

  NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: "0" })
    .then((NewOccurance) => {
      if (!NewOccurance) {
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(NewOccurance);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.put("/occuranceclosed/:id", (req, res) => {
  const {ClosedBy} =req.body
  const id = req.params.id;
  console.log("id is ", id);
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: "3" ,ClosedBy:ClosedBy };

  NewOccuranceModel.findByIdAndUpdate(id, updateFields, { Status: "2" }) //checking only occurence closing
    .then((NewOccurance) => {
      if (!NewOccurance) {
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(NewOccurance);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

///closing occurence and making garission available
app.put("/updataGarrisonToTrue/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id); //new occurrences id
  // Assuming you want to update specific fields in the Staff model
  NewOccuranceModel.findById(id).then((doc) => {
    if (!doc) {
      return res.status(404).json({ error: 'occurrence not found' });
    }
    const garissonIds= doc.av_garison.map((item) => item.garissonId);
    const updateFields = { Status: true };
    NewGarissonModel.updateMany({ _id:  { $in: garissonIds } }, updateFields, { new: false })
      .then((updatedGarrissons) => {
        if (!updatedGarrissons) {
          return res.status(404).json({ error: 'garrissons not found or not updated' });
        }
        res.json(updatedGarrissons);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
});


//gettinng all garissons

app.get("/getGarrisonAll", (req, res) => {
  NewGarissonModel.find()
    .then(function (NewGarisson) {
      res.json(NewGarisson);
    })
    .catch(function (err) {
      console.log(err);
    });
});

//SearchBar Api

app.get("/SearchedOccurences/:id", (req, res) => {

  const data = req.params.id.toString()

  NewOccuranceModel.find({ Applicant: data })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

//Time setted

app.put("/occuranceDispatchTime/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id);
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
        return res.status(404).json({ error: "vehicle not found" });
      }
      res.json(updated);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

























app.put("/getnewoccuranceAllStatusWithZero/:id", (req, res) => {
  const id = req.params.id;
  console.log("api hitted for arrival time")
  const dateNow = new Date();

  const isoDateTime = dateNow.toISOString();

  const updateFields = { Arrivaltime: isoDateTime };

  NewOccuranceModel.findByIdAndUpdate(id, updateFields, { new: true })
    .then(function (NewOccurance) {
      res.json(NewOccurance);
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.put("/updataGarrisonStat", (req, res) => {
  const { VehcleName } = req.body;

  console.log("VehcleName is ", VehcleName);
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: true };

  NewGarissonModel.findOneAndUpdate(VehcleName, updateFields, { new: false })
    .then((NewGarisson) => {
      if (!NewGarisson) {
        return res.status(404).json({ error: "av_garison not found" });
      }
      res.json(NewGarisson);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

//Dashboard backend for total occurencnes in a day ,month and yearn

// Get occurrence count for today
app.get("/occurrences/today", async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const count = await NewOccuranceModel.countDocuments({
      registrationDate: { $gte: startOfDay, $lt: endOfDay },
    });
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get occurrence count for this month
app.get("/occurrences/month", async (req, res) => {
  try {
    const startOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );
    const endOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      1
    );
    const count = await NewOccuranceModel.countDocuments({
      registrationDate: { $gte: startOfMonth, $lt: endOfMonth },
    });
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Get occurrence count for this year
app.get("/occurrences/year", async (req, res) => {
  try {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const endOfYear = new Date(new Date().getFullYear() + 1, 0, 1);
    const count = await NewOccuranceModel.countDocuments({
      registrationDate: { $gte: startOfYear, $lt: endOfYear },
    });
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});



app.delete("/deleteGarrisonStatus", (req, res) => {
  NewGarissonModel.deleteMany()
    .then((result) => {
      res.json({ deletedCount: result.deletedCount });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
})



app.put("/statustrueStaff", (req, res) => {

  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: true };

  StaffModel.updateMany({ Status: false }, updateFields)
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

app.put("/statustrueVehcle", (req, res) => {

  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: true };

  VechcleModel.updateMany({ Status: false }, updateFields)
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





app.put("/newGarisonInActive/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id);
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: false };

  NewGarissonModel.findByIdAndUpdate(id, updateFields, { Status: true })
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


app.put("/newGarisonActive/:id", (req, res) => {
  const id = req.params.id;
  console.log("id is ", id);
  // Assuming you want to update specific fields in the Staff model
  const updateFields = { Status: true };

  NewGarissonModel.findByIdAndUpdate(id, updateFields, { Status: false })
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


app.put("/updateGarrisoninServiceNew", async (req, res) => {
  try {
    const dataArray = req.body.dataArray;
    console.log('Array of IDs:', dataArray);
    
    // Update the status field of documents in the Staff collection
    const updateResult = await NewGarissonModel.updateMany(
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




app.put("/updataGarrison", async (req, res) => {
  try {
    const dataArray = req.body.dataArray;
    console.log('Array of IDs:', dataArray);

    // Update the status field of documents in the Staff collection
    const updateResult = await NewGarissonModel.updateMany(
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

app.delete("/deleteOccuranceAv_garison/:id", (req, res) => {
  const id = req.params.id;
  const indexToDelete = req.body.index;

  NewOccuranceModel.findByIdAndUpdate(
    id,
    { av_garison: splice(indexToRemove, 1) }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: 'Document not found' });
      }
      console.log(result);
      res.status(200).json({ message: 'Document updated successfully', data: result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


app.post("/createreport" , (req,res)=>{
  console.log(req.body);
  reportSchemaModel.create(req.body)
  res.json("Created")
})

app.post("/userLogin", async (req, res) => {
  // console.log("data received is ", req.body);
  try {
    const { username, password, isAdmin } = req.body;
    let user;

    if (!isAdmin) {
      user = await ResigisterNormalUserSchemaModel.findOne({
        username: username,
      });
    } else {
      user = await ResigisterNormalUserSchemaModel.findOne({
        username: username,
        isAdmin: true,
      });
    }
    console.log("user is " , user)

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Compare hashed passwords (bcrypt or similar should be used for hashing)
    const isPasswordValid = (password === user.password); // This should be replaced with bcrypt.compare

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign({
      username: user.username,
      password: user.password
    }, "secret123");

    return res.status(200).json({ success: true, message: "Login successful",user:  token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Internal server error",user: false });
  }
});

app.post("/admin/dashboard/registerUser", async (req, res) => {
  const { username } = req.body;
  const existingUser = await ResigisterNormalUserSchemaModel.findOne({
    $or: [{ username }],
  });
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }
  const dataSendToDb ={...req.body ,isAdmin:false}
  console.log(dataSendToDb)
  const data = await ResigisterNormalUserSchemaModel.create(dataSendToDb);
  console.log("req.body is ", req.body);
  res.json("Saved");
});

//displaying User
app.get("/admin/dashboard/viewitems/getRegisteredUser", async (req, res) => {
  const data = await ResigisterNormalUserSchemaModel.find({});
  res.json(data);
});

app.delete("/deleteoccurrence/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id is" ,id)
    // Assuming ResigisterNormalUserSchemaModel is the model for occurrences
    // Replace it with your actual occurrence model
    await ResigisterNormalUserSchemaModel.findByIdAndDelete(id);
    res.json({ message: "Occurrence deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting the occurrence" });
  }
});
app.put("/updateOccurence/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const{username ,password ,designation}=req.body;
    console.log("id is" ,id)
    // Assuming ResigisterNormalUserSchemaModel is the model for occurrences
    // Replace it with your actual occurrence model
    await ResigisterNormalUserSchemaModel.findByIdAndUpdate(id , {username:username , password:password ,designation:designation} , {new:true})
    res.json({ message: "Occurrence updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating the occurrence" });
  }
});





app.get("/occurencewithstatusthree" , (req, res)=>{
 

  NewOccuranceModel.find({ Status: "3" })
    .then(function (NewOccurance) {
      console.log(res.json(NewOccurance));
    })
    .catch(function (err) {
      console.log(err);
    });
  
})


// app.post('/create-pdf/:id', (req, res) => {
//   let id =req.params.id
//   let {ReportCreatedBy} =req.body
//   NewOccuranceModel.findById(id).
//   then(function (occurence) {
//       // res.send(occurence)
//       reportSchemaModel.findOne({ IdOfOccurence: occurence._id }).then(report => {
//         // Handle the documents in the report array here
//      counter=0;
//      pdf.create(pdfTemplate(occurence, report, ReportCreatedBy), {}).toFile(`result.pdf`, (err) => {
//       if (err) {
//           console.error('Error generating PDF:', err);
//           res.status(500).send('Error generating PDF');
//       } else {
//           res.status(200).send('PDF generated successfully');
//       }
// });
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// });

//   });

  
  

// app.get('/fetch-pdf', (req, res) => {

//   res.sendFile(`${__dirname}/result.pdf`)
// })

// Routes


app.post('/create-pdf/:id', (req, res) => {
  const id = req.params.id;
  const { ReportCreatedBy } = req.body;

  NewOccuranceModel.findById(id)
      .then((occurrence) => {
          reportSchemaModel.findOne({ IdOfOccurence: occurrence._id })
              .then((report) => {
                  // Generate PDF in memory
                  pdf.create(pdfTemplate(occurrence, report, ReportCreatedBy), {}).toBuffer((err, buffer) => {
                      if (err) {
                          console.error('Error generating PDF:', err);
                          return res.status(500).send('Error generating PDF');
                      }
                      // Send PDF buffer as response
                      res.contentType("application/pdf");
                      res.send(buffer);
                  });
              })
              .catch((err) => {
                  console.error('Error finding report:', err);
                  return res.status(500).send('Error finding report');
              });
      })
      .catch((err) => {
          console.error('Error finding occurrence:', err);
          return res.status(500).send('Error finding occurrence');
      });
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
