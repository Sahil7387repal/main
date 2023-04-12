import { useEffect, useState } from "react";
import axios from 'axios';
//import './serach.css';
const All=()=>{
    const [data,setData]=useState([]);
    // const [query,setQuery]=useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:5000/api/all")
          .then((result) => {
            // console.log(result.data);
            setData(result.data);
          })
          .catch((error) => console.log(error));
      }, []);
      //console.log();
    return(

        <>
        {data.map((post)=>{
            return(
                <>
                <h1>{post.name}</h1>
                </>
            )
        })}
        </>
      
       
       
          
     
    )
}
export default All;