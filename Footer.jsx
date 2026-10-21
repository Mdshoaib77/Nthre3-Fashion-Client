import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import { FaLocationDot, FaPhone, FaQuestion } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer>
            <div className='flex flex-col items-start justify-between gap-8 py-6 max-padd-container lg:flex-row mb-7 bg-primary'>
                <div>
                    <h4 className='h4'>We are always here to help</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae.</p>
                </div>
                <div className='flex-wrap gap-8 flexStart'>
                    <div className='flexCenter gap-x-6'>
                        <FaLocationDot />
                        <div>
                            <h5 className='h5'>Location</h5>
                            <p>123, Avenue, Cl</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-6'>
                        <FaPhone />
                        <div>
                            <h5 className='h5'>Phone</h5>
                            <p>01410286423</p>
                        </div>
                    </div>
                    <div className='flexCenter gap-x-6'>
                        <FaMailBulk />
                        <div>
                            <h5 className='h5'>Email Support</h5>
                            <p>nthre3official@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-start justify-between gap-12 mt-12 max-padd-container'>
                {/* logo - Left side */}
                <div className='flex flex-col max-w-sm gap-y-5'>
                    <div className='tracking-wide bold-32'>
                        NTHRE<span className='italic text-secondary'>3</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas earum reprehenderit possimus!</p>
                </div>
                <div className='flex-wrap flexStart gap-7 xl:gap-x-36'>
                    <ul>
                        <h4 className='mb-3 h4'>Customer Service</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Help center</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Payment methods</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Contact</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Shipping status</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Complaints</a></li>
                    </ul>
                    <ul>
                        <h4 className='mb-3 h4'>Legal</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Privacy Policy</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cookie settings</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Terms & conditions</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Cancelation</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Imprint</a></li>
                    </ul>
                    <ul>
                        <h4 className='mb-3 h4'>Others</h4>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Our teams</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Sustainability</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Press</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Jobs</a></li>
                        <li className='my-2'><a href="" className='text-gray-30 regular-14 '>Newsletter</a></li>
                    </ul>
                </div>
            </div>
            {/* copyrights */}
            <p className='px-8 py-2 mt-6 rounded max-padd-container bg-primary medium-14 flexBetween'><span>2025 NTHRE3</span><span>All rights reserved</span></p>
        </footer>
    )
}

export default Footer