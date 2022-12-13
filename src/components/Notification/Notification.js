import React from 'react'
import profile_1 from "../../assets/profile-pic-06.jpg"
import profile_2 from "../../assets/profile-pic-02.jpg"
import profile_3 from "../../assets/profile-pic-05.jpg"
const Notification = () => {


    const usersData = [
        {
            prifile_image: profile_1,
            user_Name: "Eva Maria",
            message: "Added a new comment on Sales task",
            minutes: "5 min ago"
        },
        {
            prifile_image: profile_2,
            user_Name: "Bavid Kames",
            message: "Assigned you on the call with Sara",
            minutes: "2 min ago"
        },
        {
            prifile_image: profile_3,
            user_Name: "Alexa Marry",
            message: "Marked the task New UI as done",
            minutes: "5 min ago"
        },
    ]





    return (
        <div>

            <div className='my-4'>
                <div className="row d-flex align-items-center justify-content-center">

                    {
                        usersData?.length > 0 ?
                            <>
                                {
                                    usersData.map((currEle) => {
                                        return (
                                            <>
                                                <div className="col-md-2 col-2 mb-4">
                                                    <img src={currEle.prifile_image} alt={currEle.user_Name} className="img-fluid rounded-circle" style={{ width: "50px", height: "50px" }} />
                                                </div>
                                                <div className="col-md-7 col-7 mb-4">
                                                    <h6 className='profile-head'>{currEle.user_Name}</h6>
                                                    <p className='card-text' style={{ fontSize: "14px" }}>{currEle.message}</p>
                                                </div>
                                                <div className="col-md-3 col-3 mb-4">
                                                    <p style={{ fontSize: "14px" }}>{currEle.minutes}</p>
                                                </div>


                                            </>
                                        )
                                    })
                                }



                            </> : null
                    }
                    <div class="dropdown-divider"></div>
                    <a href="#" className='text-center' style={{color:"#3B86FF"}}>Show More</a>
                </div>
            </div>

        </div>
    )
}

export default Notification