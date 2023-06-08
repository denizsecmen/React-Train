import logo from './logo.svg';
import './App.css';
import Area from './components/area';
import { useRef,useState } from 'react';
function App() {
  var t=useRef();
  var pd=useRef();
  var zd=useRef();
  var [zzt,p]=useState();
  return(<>
  <div className='form'>
    <label for='name'>Item Name:</label>
    <div></div>
    <input id='name' ref={t} className='name' type='text'></input>
    <div></div>
    <label for='price'>Price:</label>
    <div></div>
    <input type='number' ref={pd} min={0} max={100} id='price'></input> 
    <p>Input image:</p>
    <input type='file' ref={zd} className='f' accept='.jpg'></input>
    <div className='button'>
      <button onClick={()=>{
        var formdata=new FormData();
        formdata.append('Name',t.current.value);
        formdata.append('Price',pd.current.value);
        formdata.append('Image',zd.current.files[0]);
        fetch('http://localhost:9000/upload',{ method:'POST',body:formdata}).then((result)=>{console.log(result);p(result);window.location='/';});
      }}>Submit</button>
      <div className='shrink'></div>
      <button onClick={()=>{
        t.current.value='';
        pd.current.value='';
        zd.current.value='';
      }}>Reset</button>
    </div>
    <Area/>
  </div>
  </>)
}

export default App;
