import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./profile.css"
import avatar from '../../assets/avatar.png'

const Profile = () => {
  const user = useSelector(state=> state.userReducer.currentUser)
  return (
<div className="box">
  <div className="main-body space">
  
  <div className = "tpu headers">
  <h2>Profile</h2>
</div>

    {/* /Breadcrumb */}
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3 mt-2">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={user.image || avatar} alt="pic" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>{user.fullName}</h4>
                <p className="text-secondary mb-1">{user.role}</p>

                <button className="btn btn-primary">Follow</button>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.fullName}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.phone}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Gender</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {user.gender}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {user.address}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
               <Link to="/editprofile">  <button className="btn btn-info bnt1">Edit</button></Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Profile