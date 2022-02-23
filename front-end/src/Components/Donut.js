import { Link } from 'react-router-dom';

function Donut({ donut }) {
    return(
        <div>
            <tr className='compDonut'>
                <td>
                    <Link is='hr'to={'/donuts/${donut.id}'}>{donut.name}</Link>
                </td >
                <td id='dName'>{donut.name}</td>
                <td id='dDeds'>{donut.description}</td>
                <td id='dJolt'>{donut.jolt}</td>
                <td id='dPric'>{donut.price}</td>
                <td id='dRate'>{donut.rating}</td>
                <td id='dFeat'>{donut.feature}</td>
                <td id='dQuant'>{donut.quantity}</td>
                  <link id='dImg' to={`/donuts/${donut.id}`}>
                      <img src={ donut.image } />
                  </link>
                <td id='dResp'>{donut.responsibility}</td>
            </tr>         
        </div>
    )
}

export default Donut;