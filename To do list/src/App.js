import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import {useRef,useState} from 'react';
import Context from './context';
function App() {
  var t=useRef();
  var [g,l]=useState([]);
  return (
    <Context.Provider value={[g,l]}>
    <div className="App">
      <div className="textarea">
        <input ref={t} className="tt" type='text'></input>
        <button className='submit' onClick={()=>{
          l([...g,t.current.value]);
        }}>Submit</button>
        <button className='reset' onClick={()=>{
          t.current.value='';
        }}>Reset</button>
      </div>
      <div className="area">
        {
          g.map((elem,index)=>{
            if(elem!='')
            {
              return <Item text={elem} index={index}/>
            }
          })
        }
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
