import React, { useState,useEffect } from 'react'
import axios from 'axios';

import './App.css';
export default function App() {
  const [data,setData] = useState([])
  
  useEffect(() =>{
    axios.
    get("http://localhost:4000/trips",)
    .then((response) => {
      setData(response.data);
    });
  },[]);
  return (
    <div className="App">

      {/* header and search */}
      <h1>เที่ยวไหนดี</h1>
      <input className='seach-data' type='text' placeholder='หาที่เที่ยวแล้วไปกัน...'></input>
      <div>
      <hr className='horizontal-line'/>
      </div>
      {/* OUTPUT PROGRAM */}
      {
        Object.keys(data).map((keys)=>{
          return data[keys].map((value) => 
          {
            return(
              <div className='data-trips'>
                <div className='title-trips'>
                  <h2>{value.title}</h2>
                </div> 
                {/* <div className='discription-trips'>
                  <p>{value.description}</p>
                </div> */}
                <div className='images-trips'>
                    <img src={value.photos[0]}/>
                    <img src={value.photos[1]} id='photos1'/>
                    <img src={value.photos[2]} id='photos2'/>
                    <img src={value.photos[3]} id='photos3'/>
                </div>
                {/* <div className='tags-trips'>
                  <span>หมวด : {value.tags[0]}</span>
                  <span id='tags1'>{value.tags[1]}</span>
                  <span id='tags2'>{value.tags[2]}</span>
                  <span id='tags3'>{value.tags[3]}</span>
                </div> */}
            </div>
            )
          })
        })
        }
        
    </div>
  );
}

