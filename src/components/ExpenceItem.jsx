import React from 'react'
import {MdDelete,MdEdit} from "react-icons/md"

export default function ExpenceItem({charge,amount,id,deleteItem,editItem}) {
  //console.log("hello from item component")
  return (
    <li key={id} className="item">
        <div className='info'>
            <span className='expense'>{charge}</span>
            <span className='amount'>${amount}</span>
        </div>
        <div>
                <button className='edit-btn' ariea-aria-label='edit btn' onClick={()=>editItem(id)}><MdEdit/></button>
                <button className='delete-btn' ariea-aria-label='delete btn' onClick={()=>deleteItem(id)}><MdDelete/></button>
        </div>
    </li>
  )
}
