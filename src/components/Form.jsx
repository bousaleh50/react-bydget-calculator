import React from 'react'
import { useState } from 'react';
import { MdSend } from 'react-icons/md';
import uuid from "../../node_modules/uuid/dist/v4"

export default function Form(props) {
  
    //console.log("hello from Form component")

  return (
    <form onSubmit={props.handleSubmit}>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor="expense">charge</label>
                <input type="text" 
                 className='form-control'
                 id="charge"
                 name='charge'
                 placeholder='e.g. rent'
                 value={props.expenseData.charge}
                 onChange={props.handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="expense">amount</label>
                <input type="number" 
                 className='form-control'
                 id="amount"
                 name='amount'
                 placeholder='e.g. 100'
                 value={props.expenseData.amount}
                 onChange={props.handleChange}
                />
            </div>
        </div>
        {
            props.edit?(<button type='submit' className='btn' >
            Edit
            <MdSend className='btn-icon'/>
           </button>):
            <button type='submit' className='btn' >
                Submit
                <MdSend className='btn-icon'/>
            </button>
        }
    </form>
  )
}
