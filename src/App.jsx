
import './App.css';
import Form from './components/Form';
import ExpenceList from './components/ExpenceList';
import Alert from './components/Alert';
import uuid from "../node_modules/uuid/dist/v4"
import { useEffect, useState } from 'react';

const initialExpenses=[
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"car payment",amount:400},
  {id:uuid(),charge:"credit card bill",amount:1200},
]



function App() {
  const [expenses,setExpenses]=useState(initialExpenses);
  const [expenseData,setExpenseData]=useState({
    charge:"",
    amount:""
  });
  const  [alert,setAlert]=useState({
    status:"",
    alertMessage:"",
    display:"none"
  });

  const [edit,setEdit]=useState(false);
  const [itemId,setItemId]=useState(0);

  //console.log("hello from App component")
 

const handleChange=(e)=>{
    const {name,value}=e.target;
    setExpenseData({...expenseData,[name]:value})
}

const clearExpenses=()=>{
  setExpenses([])
  handleAlert("alert-danger","all items are deleted");
}

const handleAlert=(status,alertMessage)=>{
  setAlert({status,alertMessage,display:"block"});
  setTimeout(()=>{
    setAlert({display:"none"})
  },5000)
}

const deleteItem=(itemId)=>{
  setExpenses(expenses.filter((item)=>item.id!=itemId));
  handleAlert("alert-danger","item deleted")
}

const editItem=(itemId)=>{
  setExpenseData(expenses.find((item)=>item.id==itemId))
  setEdit(true)
  setItemId(itemId);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(expenseData.charge!=="" && expenseData.amount>0){
      if(edit){
        setEdit(false);
        let tempExpense=expenses.map((item)=>{
          return item.id===itemId?{...item,charge:expenseData.charge,amount:expenseData.amount}:item
        });
        setExpenses(tempExpense)
      }else{
        setExpenses([...expenses,{...expenseData,id:uuid()}])
      }   
      setExpenseData({charge:"",amount:""})
      handleAlert("alert-success",`${edit?"item edited":"item added"}`)
    }
    else{
      handleAlert("alert-danger","Charge Can't Be Empty Value And Amount Value Has To Be Bigger Than Zero");
    }
}
  return (
    <>
      <Alert alert={alert}/>
      <h1>budget calculator</h1>
      <main className='App'>
        <Form addExpense={setExpenses}  
         handleChange={handleChange} 
         handleSubmit={handleSubmit} 
         expenseData={expenseData}
         edit={edit}
        />
        <ExpenceList expenses={expenses} clearExpenses={clearExpenses} deleteItem={deleteItem} editItem={editItem}/>
      </main>
      <h1>
        total spending : <span className='total'>
          ${expenses.reduce((acc,cur)=>(acc+=parseInt(cur.amount)),0)}
        </span>
      </h1>
    </>
  );
}

export default App;
