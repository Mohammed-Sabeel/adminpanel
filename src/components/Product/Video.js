import React, { useRef, useState } from 'react'
import thumnail from "../../assets/video_thumbnail.png"
const Video = () => {
    const videoRef = useRef();
    const [toggle, setToggle] = useState(true);
    const [play, setPlay] = React.useState(false);
    const url = play
    ? `https://www.youtube.com/embed/Oy6hk6Y7VHQ?autoplay=1`
    : `https://www.youtube.com/embed/tu-bgIg-Luo`;

    const handleHide = () => {
        setToggle(false);
        setPlay(true)
    }



    return (
        <div>
            <div className="youtube_video p-3" onClick={handleHide}>

                <iframe className='iframe_resolution' src={url} title="Empower your workforce with Hexnode MDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {
                    toggle ?
                        <>
                            <div className="thumnail_image">
                                <img src={thumnail} alt="" className='img-fluid' style={{ height: "200px" }} />
                            </div>
                        </> : null
                }

            </div>

            {
                toggle ?
                    <>
                        <button onClick={handleHide} class="glightbox_video btn bg_transprent">
                            <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
                                <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
                                <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#d7d8d9"></path>
                            </svg>
                        </button>


                    </> : null
            }




        </div>
    )
}

export default Video