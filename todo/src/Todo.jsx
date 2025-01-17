import React, { useState } from 'react'
import './todo.css'
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
    alert("already is there ")
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
    <Row style={{marginTop:"20px"}}>
    <form onSubmit={textarray}>
    <input typeof='text' name='tname'></input>
    <button>Save</button>
  </form>
    </Row>

  <Container>
    <Row>
    {list}
    </Row>
    </Container> 

   
  </Container>

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
    <Container>
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
