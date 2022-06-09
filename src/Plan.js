import React from 'react'

function Plan(props)
{
  return (
    <div className='container'>
        <div className="row m-2" >
            <div className="col-6">
                <h6>{props.task}</h6>
            </div>

            <div className="col-6">
                <button onClick={()=>{
                    props.onSelect(props.id)
                }} className='btn btn-warning mb-2 ml-4 col-2'> X </button>
            </div>
        </div>
    </div>
  )
}

export default Plan


    
  








