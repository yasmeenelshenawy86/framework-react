import React from 'react'

export default function About() {
  return (
    <div className="about mt-5 p-5">
      <div className='container mt-5 p-5 text-white'>
        <h2 fontSize={60} className='fw-bold text-uppercase'>about component</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <hr width={100} className='d-inline-block border-4 opacity-100' />
          <i className="fa-solid fa-star fs-5 text-white px-3"></i>
          <hr width={100} className='d-inline-block border-4 opacity-100'/>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className='p-4'>
              <div>
                <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=' p-4'>
              <div>
                <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
