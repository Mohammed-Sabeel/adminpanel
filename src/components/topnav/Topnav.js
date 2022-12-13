import React, { useEffect, useState } from 'react'
import profileImage from "../../assets/profile-pic-01.jpg"
import Bell from "../../assets/icons.ico"
import handleBuger from "../../assets/handle.ico"
import user_icon from "../../assets/user-icon.ico"
import billing_icon from "../../assets/billing-icons.ico"
import logout_icon from "../../assets/logout-icons.ico"
import search from "../../assets/search.ico"
import Notification from '../Notification/Notification'
const Topnav = () => {
  const [toggle, setToggle] = useState(true)

  const hideIcon = () => {
    setToggle(!toggle)
  }




  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">

          <div className='d-flex align-items-center'>
            <button type="button" id="sidebarCollapse" class="btn bg-transparent">

              <img src={handleBuger} alt={handleBuger} className="img-fluid" />
            </button>
            <div className="d-none d-lg-block">

              <ul class="nav navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <div className="form-control-auto d-flex align-items-center mx-2">
                    <label for="tag-input" class="search_label m-0"><img src={search} alt="" /></label>
                    <input type="text" placeholder='Search transactions, invoices or help' className='bg-transprent form-control search_input' />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div >
            <ul class="nav navbar-nav  ml-auto d-flex align-items-center">

              <li class="nav-item  ">
                <a class="nav-link dropdown-toggle bell_drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={hideIcon}>
                  <span className='position-relative'> <img src={Bell} className="img-fluid " /> <span className={toggle ? 'notification position-absolute' : ' position-absolute'}></span></span>
                </a>
                <div className="row">
                  <div className="col-md-12">
                    <div class="dropdown-menu dropdown-menu-right top_nav_notification" aria-labelledby="navbarDropdown">
                      <Notification />
                    </div>
                  </div>
                </div>

              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle top_nav" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  John Doe
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#"><span><img src={user_icon} className="img-fluid" /></span> My Profile</a>
                  <a class="dropdown-item" href="#"><span><img src={billing_icon} className="img-fluid" /></span> Billing</a>

                  <a class="dropdown-item" href="#"><span><img src={logout_icon} className="img-fluid" /></span> Logout</a>
                </div>
              </li>


              <li class="nav-item">
                <a class="nav-link" href="https://mohammedsabeel.netlify.app/" target="_blank"><span> <img src={profileImage} className="img-fluid rounded" /></span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Topnav