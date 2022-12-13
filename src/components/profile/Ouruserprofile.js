import React from 'react'
// import Profile from '../../logo.svg';
import profile_1 from "../../assets/profile-pic-03.jpg"
import profile_2 from "../../assets/profile-pic-02.jpg"
import profile_3 from "../../assets/profile-pic-04.jpg"










const Ouruserprofile = () => {


    const usersData = [
        {
            prifile_image: profile_1,
            user_Name: "Drew James",
            country: "United States",
            mobile: "8715674877"
        },
        {
            prifile_image: profile_2,
            user_Name: "Bavid Kames",
            country: "United States",
            mobile: "8715674877"
        },
        {
            prifile_image: profile_3,
            user_Name: "Lavid Emes",
            country: "United States",
            mobile: "8715674877"
        },
    ]










    return (
        <div className='mt-4'>
            <div className="row d-flex align-items-center justify-content-center">

                {
                    usersData?.length > 0 ?
                        <>
                            {
                                usersData.map((currEle) => {
                                    return (
                                        <>
                                            <div className="col-md-3 col-3">
                                                <img src={currEle.prifile_image} alt={currEle.user_Name} className="img-fluid rounded-circle"   style={{width:"50px",height:"50px"}} />
                                            </div>
                                            <div className="col-md-5 col-5">
                                                <h6 className='profile-head'>{currEle.user_Name}</h6>
                                                <p className='card-text'>{currEle.country}</p>
                                            </div>
                                            <div className="col-md-4 col-4">
                                                <p>Mobile : {currEle.mobile}</p>
                                            </div>


                                        </>
                                    )
                                })
                            }



                        </> : null
                }

            </div>
        </div>
    )
}

export default Ouruserprofile