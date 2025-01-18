import React, { useState } from 'react'
import './todo.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container,Row } from 'react-bootstrap'

export default function Todo() {
  let [count,setCount]=useState([]);
let textarray=(event)=>
{let todolist=event.target.tname.value;
  event.preventDefault();
  if(!count.includes(todolist))
  {
let finaldata=[...count,todolist];
setCount(finaldata);
  }
  else{
  toast.error("Already Exist!")
  }

  
}

let list =count.map((v,i)=>
{
  return (
    <Call v={v} key ={i} index={i} count={count} setCount={setCount}/>
  )
})
  return (
    
<div>
  <Container>
<h1 style={{marginTop:"10px",color:"orange",fontFamily:"Sans-serif"}}>Todo List</h1>
    <Row style={{marginTop:"100px"}}>
    <form onSubmit={textarray}>
    <input typeof='text' name='tname' className='inp' placeholder='Enter Your Text'></input>
    <button className='btn btn-success' >Save</button>
  </form>
    </Row>

  <Container>
    <Row>
    {list}
    </Row>
    </Container> 

   
  </Container>
  <ToastContainer />
</div>
  )
}
function Call({v,index,count,setCount}) {
  let del = (index) => {
    let finaldata = count.filter((v, i) => i !== index);
    setCount(finaldata);
  };
  let [c,setC]=useState(false);
  let checkStatus=()=>{
    setC(!c);
  }
  return (
    <Container >
      <Row>
      <div className='boxes'>
      <ul className={(c)?'line':''} onClick={checkStatus}>
        <li>
       {index+1}  {v}  </li>  <span className='cross' onClick={()=>del(index)}>&times;</span>  
      </ul>
    </div>
      </Row>
    </Container>
   
  );
}
