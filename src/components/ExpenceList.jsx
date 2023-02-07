  import React from 'react'
  import Item from "./ExpenceItem"
  import {MdDelete} from "react-icons/md"

  export default function ExpenceList(props) {
    //console.log("hello from list component")
    return (
      <>
        <ul className='list'>
            {
                props.expenses.map((item)=><Item key={item.id} charge={item.charge} amount={item.amount} id={item.id} deleteItem={props.deleteItem} editItem={props.editItem}/>)
            }
       </ul>
       {props.expenses.length>0&&<button className='btn' onClick={()=>props.clearExpenses([])}>Clear Exspenses <MdDelete className='btn-icon'/> </button>}
      </>
    )
  }
  