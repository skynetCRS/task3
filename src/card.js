import React from 'react';
import Data from './data.json';
import Logo from './logo.svg';
import Pic from './resume.jpg';
import {Link} from 'react-router-dom';

let cards=()=>{
  let cdata=Data.details;
  console.log(cdata);
  let imgs=[Pic,Logo];
  return(
    <div>
      <h1 class="text-body" id="hedr">This is my Resume Home page</h1>
      <div class="row">
      {
        cdata.map((values,index)=>(
          <div class="col-10 col-md-4 cp" key={index}>
            <div class="card">
              <img src={imgs[index]} class="img-fluid"/>
              <hr/>
              <h1>{values.card.name}</h1>
              <a href={"mailto:"+values.card.email}>{values.card.email}</a>
              <p>Roll number:{values.card.roll}</p>
              <p>Ph no: {values.card.mobile}</p>
              <p>Role: {values.card.desc}</p>
              <p>College: {values.card.clg}</p>
              <Link to={{pathname:"/resume",personcd:{id:index}}} class="btn lk btn-success">My Resume</Link>
            </div>
          </div>
        ))
      }
      </div>



    </div>
  )
}
export default cards;
