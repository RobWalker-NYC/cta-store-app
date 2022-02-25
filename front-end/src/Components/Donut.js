import { Link } from 'react-router-dom';


function Donut({ donut }) {
    return(
        
            <tr className='compDonut'>
                <td>
                    <Link id='hr' to={`/donuts/${donut.id}`}>{donut.name}</Link>
                </td >
                {/* <td id='dName'>{donut.name}</td> */}
                <td id='dDeds'>{donut.description}</td>
                {/* <td id='dJolt'>{donut.jolt}</td> */}<br />
                <br/><td id='dPric'>${donut.price}.00</td><br />
                {/* <br /><td id='dRate'>{donut.rating}</td><br /> */}
                {/* <br /><td id='dFeat'>{donut.feature}</td> */}
                {/* <td id='dQuant'>{donut.quantity}</td> */}
                {/* <td id='dResp'>{donut.responsibility}</td> */}
                 <br /> <Link to={`/donuts/${donut.id}`}>
                          <img id='mainPics' style={{'height':'300px'}} src={ donut.image } />
                        </Link>
                {/* <td id='dResp'>{donut.responsibility}</td> */}
            </tr>         
        
    )
}

export default Donut;