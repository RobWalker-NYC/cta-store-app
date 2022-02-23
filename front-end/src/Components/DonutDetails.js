import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

function DonutDetails() {
  const [donut, setDonut] = useState({});
  let { id } = useParams();
  let navigate= useNavigate();

  useEffect(() => {
    axios
        .get(`${API_URL}/donuts/${id}`)
        .then((res) => {
            setDonut(res.data.payload)
      }).catch((error) => {
           console.log(error);
      });
  }, [id]);
  
    function handleDelete() {
      axios
         .delete(`${API_URL}/donuts/${id}`)
         .then((res) => {
             navigate('/donuts');
       }).catch((error) => {
            console.log(error);
       });
    };
    
    return(
      <div className='dtailBody'>
        <div className='donutDetail'>
          <div id='tailName'>Donut:</div>
          <div id='tailDescr'>Donut Description:</div>
          <div id='tailJolt'>Donut Jolt:</div>
          <div id='tailPrice'>Donut Price:</div>
          <div id='tailRate'>Donut Rating:</div>
          <div id='Feat'>Donut Feature:</div>
          <div id='tailQuant'>Donut Quantity:</div>
          <div id='tailImg'><img src={ donut.image } /></div>
          <div id='tailResp'>Donut Responsibility:</div>
        </div>
          <div className='detailBtns'>
            <Link to={`/donuts`}>
               <button id='dtBn1'>Back</button>
            </Link>
            <Link to={`/donuts/${id}/edit`}>
               <button id='dtBn2'>Edit</button>
            </Link>
               <button id='dtBn3' onClick={handleDelete}>Delete</button>
          </div>
      </div>
    );
}

export default DonutDetails;