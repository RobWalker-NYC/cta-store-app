import axios from 'axios';
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL;

function DonutNew() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [donut, setDonut] = useState({
        name: '',
        description: '',
        jolt: 0,
        price: 0,
        rating: 0,
        featured: false,
        quantity: 0,
        image: '',
        responsibility: true
    });

    const handleTextChange = (event) => {
        setDonut({...donut, [event.target.id]: event.target.value });
    };

    const handleFeaturedChange = () => {
        setDonut({...donut, featured: !donut.featured});
    };

    const handleResponsibilityChange = () => {
        setDonut({...donut, responsibility: !donut.responsibility});
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('Hello')
        axios
           .post(`${API_URL}/donuts`, donut)
           .then((res) => {
               navigate(`/donuts`)
         }).catch((error) => {
              console.log(error)    
          }) 
    };

    // function handleSubmitChangeIndex() {
    //     axios
    //        .put(`${API_URL}/donuts/${id}`, donut)
    //        .then((res) => {
    //            navigate('/donuts');
    //        }).catch((error) => {
    //             console.log(error);
    //        })     
    // };

    return (  
        <div>
            <div className='donutNew'>
                {/* <h1>Add New Donuts</h1> */}
            </div>
               <div>
                   <form onSubmit={handleSubmit} className='newVals'>
                       <div id='newName'>
                           <label htmlFor='name'>Name </label>
                           <input
                               id = 'name'
                               value = {donut.name}
                               type = 'text'
                               onChange = {handleTextChange}
                               placeholder = 'name'
                               required
                           />
                       </div>
                       <br/>
                       <div id='newDescr'>
                           <label htmlFor='description'>Description</label><br/>
                           <input
                               id= 'description'
                               value= {donut.description}
                               type= 'text'
                               onChange= {handleTextChange}
                               placeholder= 'description'
                               
                               />
                       </div>
                       <br/>
                       <div id='newJolt'>  
                           <label htmlFor='jolt'>Jolt </label>                           
                            <select>
                               <option value = '1'>1</option>
                               <option value = '2'>2</option>
                            </select>
                       </div>
                       <br/>
                       <div id='newPrice'>
                           <label htmlFor='price'>Price </label>
                           <input
                               id = 'price'
                               value = {donut.price}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'price'
                               
                               />
                       </div>
                       <br />
                       <div id='newRate'>  
                           <label htmlFor='rating'>Rating </label>
                           {/* <input
                               id = 'rating'
                               value = {donut.rating}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'rating'
                               
                               />   */}

                            <select>
                               <option value = '1'>1</option>
                               <option value = '2'>2</option>
                               <option value = '3'>3</option>
                               <option value = '4'>4</option>
                               <option value = '5'>5</option>

                            </select>
                       </div>
                       <br/>
                       <div id='newFeat'>  
                           <label htmlFor='featured'>Featured </label>
                           <input
                               id = 'featured'
                               value = {donut.featured}
                               type = 'boolean'
                               onChange = {handleFeaturedChange}
                               placeholder = 'featured'
                               
                            />
                       </div>
                       <br/>
                       <div id='newQuan'>  
                           <label htmlFor='quantity'>Quantity</label>
                           <input
                               id = 'quantity'
                               value = {donut.quantity}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'quantity'
                               required
                               />  
                       </div>
                       <br/>
                       <div id='newImage'>  
                           <label htmlFor='image'>Image </label>
                           <input
                               id = 'image'
                               type = 'text'
                               pattern = 'http[s]*://.+'
                               required
                               value = {donut.image}
                               placeholder = 'https://'
                               onChange = {handleTextChange}
                               />  
                       </div>
                       <br/>
                       <div id='newRespons'>  
                           <label htmlFor='responsibility'>Responsibility </label>
                           <input
                               id = 'responsibility'
                               value = {donut.responsibility}
                               type = 'boolean'
                               onChange = {handleResponsibilityChange}
                            //    placeholder = 'responsibility'
                               
                               />  
                       </div>
                       <br/>
                       <div className='donutNewBtns'>
 .                      </div>
                           <input id='newFtbt1' type="submit" value='Create Donut' />

        
                    </form>
                        <Link id='newFtbt2' to = {`/donuts/${id}`}>
                               <button id ='newFtbt2' type = 'submit'>Back</button>
                         </Link>
               </div>
        </div>
    );
}

export default DonutNew;