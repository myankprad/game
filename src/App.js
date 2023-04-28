import { useState } from 'react';
import './App.css';


function App() {
  const arr = ["IronMan", "Thanos", "CaptainSteve", "Thor"]
   
  const [arrCopy, setArrCopy] = useState(arr)

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
         <button>X</button>

         {el}
        <button onClick={()=> deleteHero(i) }>Delete</button>
        
         </li>
        )
      })
     }
    </ul>
   </div>
  );
}

export default App;
