import { useState } from 'react';
import './App.css';


function App() {
  

  return (
    <div className='center' >
    <h1>Rock, Paper, Scissor</h1>
    <div>
      <div className='container'>
        <div className='player'>
          <div>Player 1: 0</div>
          <div></div>
        </div>
        <div className='player'>
          <div>Player 1: 0</div>
          <div></div>
        </div>
        <div>
          <button className='round-btn'>Rock</button>
          <button className='round-btn'>Paper</button>
          <button className='round-btn'>Scissor</button>

        </div>
        <h2>Player 1 wins</h2>
      </div>
    </div>
    
   
   </div>
  );
}

export default App;

/*
let productPriceCalc = Promise.all(
  products.map(async (product)=>{
    const {productId, count}= product ;
    const productFromDB = await product.findById(productId)
    if(!productFromDB){
      throw new CustomError("No Product Found", 400)
    }
    if(productFromDB.stock < count)
  } )
)


var corsOptions ={
origin: "pttp://example.com",
optionSuccessStatus : 200
}



*/


/*
const arr = ["IronMan", "Thanos", "CaptainSteve", "Thor"]
   
  const [arrCopy, setArrCopy] = useState(arr)
  const [show, setShow] = useState(false)

  const showButton=() =>{
    setShow(true)
  }



  const deleteHero = (itemIndex)=>{
    // let newArr = arrCopy;
    // let filteredArr = newArr.filter((el, i)=>{
    //      return i !== itemIndex
    // })

    // setArrCopy(filteredArr)

   let newArr = arrCopy
   let filteredArr = newArr.filter((el, i)=>{
      return i !== itemIndex
   })
    setArrCopy(filteredArr)

  }


   <ul>
     {
      arrCopy.map((el, i)=>{
       return ( 
        <li>
         <button onClick={()=> showButton()}>X</button>

         {el}
          {
            show ? (  <button onClick={()=> deleteHero(i) }>Delete</button>) 
            : (<button></button>)

          }      
         </li>
        )
      })
     }
    </ul>


*/