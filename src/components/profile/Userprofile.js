import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import profile from "../../assets/profile-pic-01.jpg"
const Userprofile = () => {
  return (
    <div className='bg-white'>
        <div className="user-profile">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center">
                          <div className="user-profile-image">
                            <img src={profile} className='rounded-circle img-fluid profile_img'/>
                          </div>
                        </div>
                        <h5 className='profile-name'>Nick Herasimenka</h5>
                        <p className='text-center card-text'>United States</p>
                        <div class="Social-media">
                          <a href="#" className='social-links'><span color="#007cc4"><AiOutlineTwitter className='fa-twitter' /></span></a>
                          <a href="#" className='social-links'><span color="#007cc4"><BsFacebook className='fa-facebook' /></span></a>
                          <a href="#" className='social-links'><span color="#007cc4"><AiFillLinkedin className='fa-linkedin' /></span></a>
                          <a href="#" className='social-links'><span color="#007cc4"><FaWhatsapp className='.fa-whatsapp' /></span></a>


                        </div>

                      </div>
                    </div>

                  </div>
    </div>
  )
}

export default Userprofile