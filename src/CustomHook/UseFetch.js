import React, { useEffect, useState } from 'react'

function UseFetch(req) {
    let[product,setproduct]= useState([])

    useEffect(()=>{

        fetch(req)
        .then((data)=>{
              return  data.json()
        }).then((json)=>{setproduct(json);})

    },[])

  return {product}

}
    
export default UseFetch