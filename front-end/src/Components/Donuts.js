import axios from 'axios';
import { useState, useEffect } from 'react';
import Donut from './Donut';

const API_URL = process.env.REACT_APP_API_URL;

function Donuts() {
    const [donuts, setDonuts] = useState ([]);
       
    useEffect(() => {
        axios
          .get(`${API_URL}/donuts`)
          .then((res) => {
              setDonuts(res.data.payload);
          }).catch((error) => {
               throw error
          })
    }, [API_URL]);
    
    return (
       <div>
           <div className='idDonuts'>
           {/* <p>{donuts.name}<th id='indexTBody'>{donuts.map((donut, id) => {return ( <Donut key={id} donut={donut} id={id} />);})}</th></p> */}
               <section>
                   {/* <table>
                       <thead>
                           <tr> */}
                               {/* <th>Name</th>
                               <th>Description</th>
                               <th>Jolt</th>
                               <th>Price</th><br /> */}
                               {/* <th>Rating</th> */}
                            {/* <th>Featured</th> */}
                               {/* <th>Quantity</th> */}
                               {/* <th>Responsibility</th> */}
                               {/* <th>Image</th> */}
                               
                               <br /><p><th id='indexTBody'>{donuts.map((donut, id) => {return ( <Donut key={id} donut={donut} id={id} />);})}</th></p>
                              
                          {/* </tr>
                       </thead>
                   </table> */}
               </section>
           </div>
       </div>
    );
}

export default Donuts;