import React, { useEffect , useState} from 'react'
import axios from 'axios'
 const GuOfTheDay = () => {
  

  const [Occurance_hold,SetOccurance_hold] = useState([])
  const [GarisonFalse , setGarisonFalse] = useState([])
  const [occuranceId , setoccuranceId] = useState(null)
  const [garisonId , setGarisonId] = useState(null)
  const [av_garison , setav_garison] = useState([])


  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://localhost:3000/getnewoccuranceAllStatus")
      .then((response) => {
        // Set the fetched data in state
        SetOccurance_hold(response.data);
        console.log(response)
      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });


      axios
      .get("http://localhost:3000/getGarrison")
      .then((response) => {
        setGarisonFalse(response.data)
        console.log("Garrson finded are",response.data)
        // Set the fetched data in state
       

      })
      .catch((error) => {
        // Handle errors, if any
        console.error("Error fetching data:", error);
      });

  }, []);


  const handleInput = (event) =>{
    event.preventDefault();

    const { id } = event.target;
    console.log("d",id)
    setoccuranceId(id);
  } 

  const handleInputGarison = (event) =>{
    event.preventDefault();
    const { id , value} = event.target;
    console.log("Garison",id)
    setGarisonId(id);
    console.log("Value",value);
    setav_garison(  [occuranceId ,value] )
  } 


  console.log('id' , garisonId)

  const handleData =() =>{

    axios.put(`http://localhost:3000/occuranceDispatch/${occuranceId}`)
      .then((response)=>{
          console.log("data is "  , response);
          
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

      //Time
      axios.put(`http://localhost:3000/occuranceDispatchTime/${occuranceId}`)
      .then((response)=>{
          console.log("data is "  , response.data);
          
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

      axios.put(`http://localhost:3000/updataGarrison/${garisonId}`)
      .then((response)=>{
          console.log(response);  
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });

       axios.put(`http://localhost:3000/occuranceDispatchGarison` , {dataArray : av_garison})
      .then((response)=>{
          console.log(response);  
      })
      .catch((error) => {
        console.error('Error fetching vehicle data:', error);
      });
  }





  return (

    
    <div className="custom-container">
    <div className="container">
      <div className="Dashboard_heading">
        <h3>Ocorrência aguardando atençãon</h3>
        <hr className='my-5'/>
      </div>

      <div className="row">
      <div className="col-md-8 col-sm-12 ">
        {Occurance_hold.map((v, i) => {

          
         return (
            <div className="col-md-12 colsm-12 my-3 occurance_holds" style={{display:"flex" ,justifyContent:"space-around", alignItems:'center'}}>
            <input type="radio" name='11' id={v._id} onChange={handleInput}/>
              <h4>Telefone : {v.phone} </h4>
              <h4>Candidato : {v.Applicant} </h4>
              <h4>code : {v.occurance_Code} </h4>
              <h4>Rua : {v.street} </h4>  
              </div>
          );
        })}
         </div>



        <div className="col-md-4 col-sm-12 ">
         <div className="Avaliable_gar my-3   "> 
         <h3 className="text-center">Garnição Disponível</h3>
              {GarisonFalse.map((v,i)=>{              
              return(
              <div>
                <input
                  type="radio"
                  id={v._id}
                  name="av_garison"
                  value={v.StaffName + v.VehcleName}
                  onChange={handleInputGarison}
                />
                <label for="vehicle1" className="ml-2">
                  {v.StaffName + v.VehcleName}
                </label>
              </div>
              )
             })}
        
        
        
          </div>
        
          <div className="button mt-3 text-center">
          <a href="" className="btn btn-primary " onClick={handleData} style={{padding:"10px 120px"}}> Despatcho</a>
          </div>


        </div>
      </div>
    </div>
    </div>
  );
}

export default GuOfTheDay