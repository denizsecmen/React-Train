import './area.css';
import { useEffect,useState} from 'react';
export default  function Area()
{   
    var[data,p]=useState([]); 
    useEffect( ()=>{fetch('http://localhost:9000/retrieve').then((result)=>{console.log(result);return result.json()}).then((resu)=>{p(JSON.parse(resu));})},[])
    return (
        <div className='Area'>
            {
                data.map((elem,index)=>{
                    return (
                    <div>
                        <p>Name:{elem.Name}</p>
                        <p>Price:{elem.Price}</p>
                        <img key={index} src={`data:image/jpeg;base64,${elem.imageUrl}`}></img>
                    </div>)
                })
            }
        </div>
    )
}