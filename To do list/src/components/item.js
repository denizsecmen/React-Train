import './items.css';
import { FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { useContext,useState,useRef } from 'react';
import Context from '../context';
export default function Item(props)
{
    var [t,p]=useContext(Context);
    var yy=useRef();
    var [st,sw]=useState(false);
    return (
        <div className='item'>{st?<input className='rr' ref={yy} type='text'/>:<div className='texr'>{props.text}</div>}<div className='icons'>
        {
            st?<div><FaCheck onClick={()=>{
                t[props.index]=yy.current.value;
                console.log(t);
                p([...t]);
                sw(false);
            }}/>
            <FaTimes onClick={()=>{
                sw(false);
            }}/></div>:<div>
            <FaMinus
        onClick={()=>{
            var g=t.filter((elem,index)=>{
                return index!=props.index
            });
            console.log(g)
            p([...g]);
        }}/><FaRegPaperPlane onClick={()=>{
            sw(true);
        }}/>
            </div>
        }
        </div></div>
    )
}