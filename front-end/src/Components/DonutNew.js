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
        axios
           .post(`${API_URL}/donuts`, donut)
           .then((res) => {
               navigate(`/donuts`)
         }).catch((error) => {
              console.log(error);
          })
    };

    function handleSubmitChangeIndex() {
        axios
           .put(`${API_URL}/donuts/${id}`, donut)
           .then((res) => {
               navigate('/donuts');
           }).catch((error) => {
                console.log(error);
           })     
    };

    return (
        <div>
            <div className='donutNew'>
                {/* <h1>Add New Donuts</h1> */}
            </div>
               <div>
                   <form onSubmit={handleSubmit} className='newVals'>
                       <div id='newName'>
                           <label htmlFor='name'>Name</label>
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
                               id = ' description'
                               value = {donut. description}
                               type = 'text'
                               onChange = {handleTextChange}
                               placeholder = 'description'
                               required
                               />
                       </div>
                       <br/>
                       <div id='newJolt'>  
                           <label htmlFor='jolt'>Jolt</label><br/>
                           <input
                               id = 'jolt'
                               value = {donut.jolt}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'jolt'
                               required
                               />  
                       </div>
                       <br/>
                       <div id='newPrice'>
                           <label htmlFor='price'>Price</label><br/>
                           <input
                               id = 'price'
                               value = {donut.price}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'price'
                               required
                               />
                       </div>
                       <div id='newRate'>  
                           <label htmlFor='rating'>Rating</label><br/>
                           <input
                               id = 'rating'
                               value = {donut.rating}
                               type = 'number'
                               onChange = {handleTextChange}
                               placeholder = 'rating'
                               required
                               />  
                       </div>
                       <br/>
                       <div id='newFeat'>  
                           <label htmlFor='featured'>Featured</label><br/>
                           <input
                               id = 'featured'
                               value = {donut.featured}
                               type = 'boolean'
                               onChange = {handleFeaturedChange}
                               placeholder = 'featured'
                               required
                            />
                       </div>
                       <br/>
                       <div id='newQuan'>  
                           <label htmlFor='quantity'>Quantity</label><br/>
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
                           <label htmlFor='image'>Image</label><br/>
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
                           <label htmlFor='responsibility'>Responsibility</label><br/>
                           <input
                               id = 'responsibility'
                               value = {donut.responsibility}
                               type = 'boolean'
                               onChange = {handleResponsibilityChange}
                               placeholder = 'responsibility'
                               required
                               />  
                       </div>
                       <br/>
                       <div className='donutNewBtns'>

                           <button onClick={handleSubmitChangeIndex}>Create New Donut</button>
                           
                           <br/>
                           <Link to = {`/donuts/${id}`}>
                               <button type = 'submit'>Back</button>
                           </Link>
                       </div>
                    </form>
               </div>
        </div>
    );
}

export default DonutNew;