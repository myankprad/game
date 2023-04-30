import { useState } from 'react';
import './App.css';


function App() {
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



  return (
    <div className="app">
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




*/
