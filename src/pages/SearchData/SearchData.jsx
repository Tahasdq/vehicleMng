import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataNotFound from '../../components/DataNotFound/DataNotFound';
import './SearchData.scss'; // Import CSS file for custom styles

const SearchData = () => {
  const { id } = useParams();
  const [dataSearched, setDataSearched] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3000/SearchedOccurences/${id}`)
        .then((response) => {
          setDataSearched(response.data);
          console.log("Data fetched:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  return (
    <div className='container '>
      <div className="heading">
        <h3>Searched Data</h3>
        <hr />
      </div>
      <div  className="">
        {dataSearched.length > 0 ? (
          dataSearched.map((v, i) => (
            <div style={{width:"100%"}} className="ml-15  my-3 row  " key={i}>
              <div className="occurrence-box w-100">
                <h6>Telefone: {v.phone}</h6>
                <h6>Candidato: {v.Applicant}</h6>
                <h6>Garnição deixando a cena: {v.Neighbourhood}</h6>
                <h6>Bonde: {v.Street}</h6>
                <h6>Rua: {v.Street}</h6>
              </div>
            </div>
          ))
        ) : (
          <DataNotFound />
        )}
      </div>
    </div>
  );
};

export default SearchData;
