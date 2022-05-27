import React,{useState} from 'react'

import '../Css/Request.css'

function Request() {


  let[textbar,setTextbar] = useState('')
  let[rating,setRating] = useState('')
  let[title,setTitle]= useState('')
  let[cost,setCost] =useState('')
  let[quantity,setQuantity]=useState('')
  let[description ,setDescription]=useState('')

  // console.log(textbar);
  // console.log(rating);
  // console.log(title);
  // console.log(quantity);
  // console.log(description);

  // let movie ={textbar,rating,title}

  
  const fetchingdata = (e) =>{
    e.preventDefault();
    let movies ={textbar,rating,title,quantity,description}
    console.log(movies);
    
    fetch("http://localhost:3004/catfood",
     {method:'POST',
     headers:{"Content-Type":'application/json',
              "Accept":"application/json"},
    body:JSON.stringify(movies),
  }).then((result)=>{
    return result.json()
  }).then((resp)=>{console.warn('resp' ,resp)})
    
  }
  


  return (
      
<>
<form className='Form' onSubmit={fetchingdata}>
<label className = 'textBar'  htmlFor='Brand'>Brand</label>
<input type='text' value={textbar}  onChange={(e)=>{setTextbar(e.target.value)}} name='Brand' placeholder='Brand'></input>

<label className = 'textBar'  htmlFor='rating'>rating</label>
<input type='number' min='0' max='5' name='rating' placeholder='Rating' value={rating} onChange = {(e)=>{setRating(e.target.value)}}></input>

<label className = 'textBar'  htmlFor='title'>title</label>
<input type='text' name='title' placeholder='title' value={title} onChange = {(e)=>{setTitle(e.target.value)}}></input>

<label className = 'textBar'  htmlFor='Cost'>Cost</label>
<input type='number' name="Cost" placeholder='Cost' value={cost} onChange={(e)=>{setCost(e.target.value)}}></input>

<label className = 'textBar'  htmlFor='Rating1'>Quantity</label>
<input type='number' name='Quantity' placeholder='Quantity' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}></input>

<label htmlFor='Description'>Description</label>
<textarea  name='Description' placeholder='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}   >  </textarea>

<input type='submit'/>
   </form>
    {/* <button className='btn-2'  >Submit</button> */}








</>
   
   
    
    
    

  )
}

export default Request