import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const DeleteUser = () => {
    const [data,setData] = useState(
        {
            "username":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
    }
  return (
    <div>
        <NavigationBar/>
<div className="container">
    <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Username</label>
                                <input type="text" className="form-control"  name="username" value={data.username} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-dark" onClick={readValue}>REMOVE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteUser