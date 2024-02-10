import React from 'react'
import img from "../../assets/avataaars.svg"
export default function Home() {
  return (
    <div className="home pt-3 mt-5 vh-100">
      <div className='container py-5 text-white d-flex flex-column'>
        <div>
          <img src={img} className='w-100' height={300} alt="" />
        </div>
        <div>
          <h1 fontSize={60} className='fw-bold text-uppercase py-3'>start framework</h1>
          <div className='d-flex justify-content-center align-items-center'>
            <hr width={100} className='d-inline-block border-4 opacity-100' />
            <i className="fa-solid fa-star fs-5 text-white px-3"></i>
            <hr width={100} className='d-inline-block border-4 opacity-100' />
          </div>
            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
              <li className='text-capitalize p-1'>graphic artist -</li>
              <li className='text-capitalize p-1'>web designer -</li>
              <li className='text-capitalize p-1'>illustrator</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

