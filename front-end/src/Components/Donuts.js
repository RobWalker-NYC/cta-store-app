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
            console.log(res.data)
              setDonuts(res.data.payload);
          }).catch((error) => {
               throw error
          })
    } );

    let allDonuts = donuts.map((donut, id) => {
          return <Donut key = {id} donut = {donut} />
    });
    

    let featDonut = donuts.filter(donut => donut.featured)
                          .map((donut) => {
                              return <Donut key = {donut.id} donut = {donut} />
                          })
    return (
       <div>
           <div className='idDonuts'>
               <div className='doFilt'>
               <div id='fd'>
                   <label htmlFor='featDonut'>Featured Donuts are listed here </label>
                   <input id='fNut' value='fNut' type='checkbox'/>
               </div>
               <div id='DonutFilt'>
                 {featDonut ? featDonut : allDonuts}
               </div>
               </div>
               <section>
                   <table>
                       <thead>
                           <tr>
                               {/* <th>Name</th> */}
                               {/* <th>Description</th> */}
                               {/* <th>Jolt</th> */}
                               {/* <th>Price</th><br /> */}
                               {/* <th>Rating</th> */}
                               {/* <th>Featured</th> */}
                               {/* <th>Quantity</th> */}
                               {/* <th>Responsibility</th> */}
                               {/* <th>Image</th> */}
                               
                               <th id='indexTBody'>{donuts.map((donut, id) => {
                                   return ( <Donut key={id} donut={donut} id={id} 
                                   />)
                                })}
                                   </th>
                              
                          </tr>
                       </thead>
                   </table>
               </section>
           </div>
       </div>
    );
}

export default Donuts;