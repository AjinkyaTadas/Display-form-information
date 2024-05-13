import React, { useState } from 'react';


const App = () => {

  const [newEntry, setNewEntry] = useState({
    myname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const myData = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setNewEntry((previousData) => {
      if (name === "myname") {
        return {
          myname: value,
          mobile: previousData.mobile,
          email: previousData.email,
          password: previousData.password
        }
      }
      else if (name === "mobile") {
        return {
          myname: previousData.myname,
          mobile: value,
          email: previousData.email,
          password: previousData.password,
        }
      }
      else if (name === "email") {
        return {
          myname: previousData.myname,
          mobile: previousData.mobile,
          email: value,
          password: previousData.password,
        }
      }
      else if (name === "password") {
        return {
          myname: previousData.myname,
          mobile: previousData.mobile,
          email: previousData.email,
          password: value,
        }
      }
    })
  }

  return (
    <>
      <div className="container text-center my-3">
        <form>
          <div>
            <input type="text" placeholder='enter your name' className='w-50 my-3 py-1' value={newEntry.myname} name="myname" onChange={myData} />
          </div>
          <div>
            <input type="text" placeholder='enter your mobile' className='w-50 my-3 py-1' value={newEntry.mobile} name="mobile" onChange={myData} />
          </div>
          <div>
            <input type="email" placeholder='enter your email' className='w-50 my-3 py-1' value={newEntry.email} name="email" onChange={myData} />
          </div>
          <div>
            <input type="password" placeholder='enter your password' className='w-50 my-3 py-1' value={newEntry.password} name="password" onChange={myData} />
          </div>
          <button type='submit' className='btn btn-success'>submit</button>
        </form>


        <div className='my-3'>
          <h5>{newEntry.myname}</h5>
          <h5>{newEntry.mobile}</h5>
          <h5>{newEntry.email}</h5>
          <h5>{newEntry.password}</h5>

        </div>


      </div>
    </>
  )
}

export default App
