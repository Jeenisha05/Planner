import React, { useState } from 'react';
// eslint-disable-next-line
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './Plan';


const App = () => {

  const [task, settask] = useState("")
  const [data, setdata] = useState([])

  const onChangeHandler = (e) => {
    settask(e.target.value) 
  }

  const submitHandler =(e) =>{
    e.preventDefault();
    const newData = task;
    setdata([...data,newData])

    settask("");
  }

  const deleteItem=(a)=>{
    const finalData = data.filter((curEle,index)=>{
      return index !== a;
    })
    setdata(finalData)
  }

  return (
    <div className="Container-fluid">
      <div className="Row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center"> Today's Plan </h2>
         <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder='Write Plan Here' value={task} onChange={onChangeHandler} />
            </div>
              <button type="submit" className='btn btn-warning mb-2 ml-2 col-2 '> Add </button> 
            </div>
            </form>

            {
              data.map((value, index)=>{
                  return(<Plan                  
                  key={index}
                  id={index}
                  task={value}
                  onSelect={deleteItem}
                  />
                  )
                
              })
            } 
            </div>
          </div>
        </div>
  );
  }




export default App;
