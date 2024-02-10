import React from 'react'

export default function Footer() {
  return <>
    <div className="footer py-4 text-white">
    <div className='container my-5' padding={40}>
      <div className="row">
        <div className="col-md-4">
            <div>
              <h3 className='text-uppercase'>location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-md-4"> 
            <div className=''>
              <h3 className='text-uppercase'>around the web</h3>
              <div >
                <i className ="fa-brands fa-facebook border border-1 rounded-circle p-2 mx-1"></i>
                <i className="fa-brands fa-twitter border border-1 rounded-circle p-2 mx-1"></i>
                <i className="fa-brands fa-linkedin-in border border-1 rounded-circle p-2 mx-1"></i>
                <i className="fa-solid fa-globe border border-1 rounded-circle p-2 mx-1"></i>
              </div>
            </div>
        </div>
        <div className="col-md-4">
            <div>
              <h3 className='text-uppercase'>about freelancer</h3>
              <p>freelance is a free to use, licensed bootstrap theme created by route</p>
            </div>
        </div>
      </div>
    </div>
    </div>
    <p className='copy p-4 fs-6 text-white mb-0'>copyright &copy; your website 2021</p>
  </>
}
