import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom/dist'
import DataNotFound from '../../components/DataNotFound/DataNotFound'

const SearchData = () => {
  const { id } = useParams();
  const [dataSearched, setDataSearched] = useState([]); // Initialize state with null or initial value

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/SearchedOccurences/${id}`)
        .then((response) => {
          setDataSearched(response.data); // Set fetched data in state
          console.log("Data fetched:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]); // useEffect will run whenever id changes
  



  return (
   <div className='custom-container'>
      <div className="container">
        <div className="Dashboard_heading">
          <h3>Searched Data
</h3>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 ">
            {dataSearched.length>0 ? (dataSearched.map((v, i) => {
              return (
                <div className="col-md-12 col-sm-12 my-3 occurance_holds row">
                  <div className="col-md-10 row">
                  
                  <div className="col-md-3 col-sm-12">
                    <h6>Telefone : {v.phone} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Candidato : {v.Applicant} </h6>
                  </div>
                 
                  <div className="col-md-6  col-sm-12">
                    <h6>Garnição deixando a cena :{v.Neighbourhood} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Bonde : {v.Street} </h6>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <h6>Rua : {v.Street} </h6>
                  </div>
                  
                  <div
                    className="col-md-6 col-sm-12 gu_list"
                  >
                    <h6> Gu Lista : </h6>

                      <span>
                        
                      {/* <div className="col-md-3 col-sm-12"> */}
                        
                          
                          {v.av_garison} 
                  {/* </div> */}
                     
                      </span>
                 
                  </div>
                  </div>
                </div>
              );
            })
            ): <DataNotFound  /> 
          }

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchData