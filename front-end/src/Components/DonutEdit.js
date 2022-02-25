import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL;

function DonutEdit() {
    const { id } = useParams();

    const [donut, setDonut] = useState({
        name: '',
        description: '',
        jolt: 0,
        price: 0,
        rating: 0,
        featured: false,
        quantity: 0,
        image: '',
        responsibility: true,
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setDonut({...donut,[event.target.id]: event.target.value });
    };
    useEffect(() => {
        axios
           .get(`${API_URL}/donuts/${id}`)
           .then((res) => {
               setDonut(res.data.payload);
         }).catch((error) => {
               throw error
           })
    }, [id]);

    const handleEdit = (event) => {
        event.preventDefault()
        axios
           .put(`${API_URL}/donuts/${id}`, donut)
           .then((res) => {
               navigate(`/donuts`)
         }).catch((error) => {
               console.log(error);
         })
    };

  return(
      <div className='donutEdit'>
          <div><br />
              <form onSubmit={handleEdit}>
                  <br/>
                      <label id='editName' htmlFor='name'>Name  </label>
                      <input
                          id= 'name'
                           value= {donut.name}
                           type= 'text'
                           onChange= {handleTextChange}
                           placeholder= 'name'
                          />
                  <br/> 
                  <br /><div id='editJolt'>
                        <label htmlFor='jolt'>Jolt </label>
                        {/* <input
                            id = 'jolt'
                            value = {donut.jolt}
                            type = ''
                            onChange = {handleTextChange}
                            placeholder = ''
                            required
                            /> */}
                            <select>
                               <option value = '1'>1</option>
                               <option value = '2'>2</option>
                            </select>
                  </div>
                  <br/> 
                  <div id='editRate'>
                        <label htmlFor='rating'>Rating </label>
                        {/* <input
                            id = 'rating'
                            value = {donut.rating}
                            type = 'number'
                            onChange = {handleTextChange}
                            placeholder = '4'   
                            /> */}
                          <select>
                               <option value = '1'>1</option>
                               <option value = '2'>2</option>
                               <option value = '3'>3</option>
                               <option value = '4'>4</option>
                               <option value = '5'>5</option>

                            </select>

                  </div>
                  <br/> 
                  <div id='editFeat'>
                    <label htmlFor='featured'>Featured </label>
                      <input
                          id = 'featured'
                           value = {donut.featured}
                           type = 'boolean'
                           onChange = {handleTextChange}
                           placeholder = 'false'
                           
                          />
                  </div>
                  <br/> 
                  <div id='editQuan'>
                    <label htmlFor='quantity'>Quantity </label>
                      <input
                          id = 'quantity'
                           value = {donut.quantity}
                           type = 'number'
                           onChange = {handleTextChange}
                           placeholder = '0'
                           required
                          />
                  </div>
                  <br/> 
                  {/* <div id='editRespons'>
                    <label htmlFor='responsibility'>Responsibility</label>
                      <input
                          id = 'responsibility'
                           value = {donut.responsibility}
                           type = 'boolean'
                           onChange = {handleTextChange}
                           placeholder = 'true'
                           required
                          />
                  </div>  
                  <br/>  */}
                  <div id='editImage'><img style={{'height':'500px'}} src={ donut.image } />
                    <label htmlFor='image'> Image </label>
                      <input
                          id = 'image'
                          type = 'text'
                          pattern = 'http[s]*://.+'
                          required
                          value = {donut.image}
                          placeholder = 'http://'
                          onChange = {handleTextChange}
                          />
                    </div> 
                    <br/> 
                    <div className='donutEditBtns'>
                            {/* <button id='editFtBt2'  type = 'submit' >Submit Donut</button> */}
                    <Link to = {`/donuts/${id}`}>
                            <button id='editFtBt1' type = 'submit'>Back</button>
                    </Link>
                            <button id='editFtBt2'  type = 'submit' >Submit Donut</button>
                    

                    </div>            
              </form>
          </div>
      </div>
  );
}

export default DonutEdit;