import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddDetails = () => {
    const [data,setData] = useState(
        {

            "userid":"",
            "username":"",
            "emailid":"",
            "dob":"",
            "password":"",
            "confirmpass":"",
            "feedback":""

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
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">UserID</label>
                            <input type="text" className="form-control" name="userid" value={data.userid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">D.O.B</label>
                            <input type="date" name="dob" value={data.dob} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmpass" value={data.confirmpass} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Feedback</label>
                            <textarea id="" className="form-control" name="feedback" value={data.feedback} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-dark" onClick={readValue}>POST</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddDetails