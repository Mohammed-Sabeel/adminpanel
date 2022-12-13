import React from 'react'

import home_icon from "../../assets/home.ico"
import dash_icon from "../../assets/dash.ico"
import inbox_icon from "../../assets/inbox.ico"
import products_icon from "../../assets/products.ico"
import settings_icon from "../../assets/settings.ico"
const Sidebar = () => {
  
  

  
  return (
    <div>
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>ACME</h3>
        </div>

        <ul class="list-unstyled components">

          {/* <li class="active">
                 <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                 <ul class="collapse list-unstyled" id="homeSubmenu">
                     <li>
                         <a href="#">Home 1</a>
                     </li>
                     <li>
                         <a href="#">Home 2</a>
                     </li>
                     <li>
                         <a href="#">Home 3</a>
                     </li>
                 </ul>
             </li> */}
          <li>
            <a href="#"><span><img src={home_icon} className="mx-2"/>  </span>Home</a>
          </li>
          {/* <li>
                 <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                 <ul class="collapse list-unstyled" id="pageSubmenu">
                     <li>
                         <a href="#">Page 1</a>
                     </li>
                     <li>
                         <a href="#">Page 2</a>
                     </li>
                     <li>
                         <a href="#">Page 2</a>
                     </li>
                 </ul>
             </li> */}
          <li class="sidebar_active">
            <a href="#" class="sidebar_active"><span><img src={dash_icon} className="mx-2" />  </span> Dashboard</a>
          </li>
          <li>
            <a href="#"><span><img src={inbox_icon} className="mx-2"/>  </span> Index</a>
          </li>
          <li>
            <a href="#"><span><img src={products_icon}  className="mx-2"/>  </span> Products</a>
          </li>
          <li>
            <a href="#"><span><img src={settings_icon} className="mx-2"/>  </span> Admin</a>
          </li>
        </ul>


      </nav>

    </div>
  )
}

export default Sidebar