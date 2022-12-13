import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import Ouruserprofile from './Ouruserprofile'
const Ouruser = () => {
    return (
        <div className='bg-white'>
            <div className="our-users-section">
                <div className="space-between">

                    <h5 className='our-user-heading'>Our Users</h5>
                    <span><SlOptionsVertical /></span>
                </div>
                <Ouruserprofile/>
            </div>
        </div>
    )
}

export default Ouruser