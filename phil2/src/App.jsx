import React from 'react'
import List from './list.jsx'

function App() {

   const models=[
       { id:1 , name: "bentley continental", color:"black", price: 250000},
       {id:2 , name: "jaguar f-type", color:"red" , price: 90000},
         {id:3 , name: "porsche 911", color:"white", price: 120000},
            {id:4 , name: "ferrari 488", color:"yellow", price: 300000},
                {id:5 , name: "lamborghini huracan", color:"green", price: 350000},
    ]

    const bikes=[
         { id:6 , name: "Honda", color:"black", price: 250000},
       {id:7 , name: "Dugatti", color:"red" , price: 90000},
         {id:8 , name: "David hardson", color:"white", price: 120000},
            {id:9 , name: "SUzuki", color:"yellow", price: 300000},
                {id:10 , name: "Vesper", color:"green", price: 350000},

    ]
  return (
    <>
   <List model={models} 
    category =  "Cars" power="Over 500"/>
      
    <List model={bikes}  category =  "Bikes" power="Over 200"/>
    </>
  );
}


export default App;
