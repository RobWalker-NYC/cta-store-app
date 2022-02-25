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
          <div id='tailName'> {donut.name}</div>
          <div id='tailDescr'>{donut.description}</div>
          <div id='tailJolt'>Jolt: Single or Double / {donut.jolt} or 2</div>
          <div id='tailPrice'>Price: $ {donut.price}.00</div>
          <div id='tailRate'>Rating: {donut.rating}</div>
          <div id='tailFeat'>Donut Featured:  { donut.featured ? 'Yes' : 'No'}</div>
          {/* <div id='tailQuant'>Donut Quantity: {donut.quantity}</div> */}
          {/* <div id='tailResp'>Donut Responsibility: {donut.responsibility}</div><br /> */}
          <br /><div id='tailImg'><img style={{'height':'500px'}} src={ donut.image } /></div><br />

        </div>
          <div className='detailBtns'>
            <Link to={`/donuts`}>
               <button id='dtBn1'>Back</button>
            </Link>
            <Link to={`/donuts/${id}/edit`}>
               <button id='dtBn2'>Edit Item</button>
            </Link>
               <button id='dtBn3' onClick={handleDelete}>Delete Item</button>
          </div>
        </div>
   );
}

export default DonutDetails;