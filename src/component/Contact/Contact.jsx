// import { useState} from "react";

export default function Contact() {
  
  // const [username, setUsername] = useState('');
  // const [userAge, setUserAge] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const usernameChange = () => {
  const labelName = document.getElementById("label1");
  const nameInp = document.getElementById("username");
    if (nameInp.value.length > 0) {
      labelName.classList.remove("d-none")
    } else {
      labelName.classList.add("d-none")
    }
};
    const userAgeChange = () => {
    const ageInp = document.getElementById("userAge")
    const labelAge = document.getElementById("label2");
    if (ageInp.value.length > 0) {
      labelAge.classList.remove("d-none")
    } else {
      labelAge.classList.add("d-none")
    }
  };

  const emailChange = () => {
    const emailInp = document.getElementById("email");
    const labelEmail = document.getElementById("label3");
    if (emailInp.value.length > 0) {
      labelEmail.classList.remove("d-none")
    } else {
      labelEmail.classList.add("d-none")
    }
  };

  const passwordChange = () => {
    const labelPass = document.getElementById("label4");
    const passInp = document.getElementById("password");
    if (passInp.value.length > 0) {
      labelPass.classList.remove("d-none")
    } else {
      labelPass.classList.add("d-none")
    }
  };

  return (
    <div className="contact mt-5 p-5">
        <div className="container p-4 text-white">
          <h2 className='fs-1 fw-bold text-uppercase'>Contact Section</h2>
          <div className='icon d-flex justify-content-center align-items-center'>
            <hr width={100} className='d-inline-block border-4 opacity-100' />
            <i class="fa-solid fa-star fs-6 px-3"></i>
            <hr width={100} className='d-inline-block border-4 opacity-100'/>
          </div>
        <form className='w-50 mx-auto'>
          <div className='my-3'>
            <label htmlFor="username" id="label1" className="d-none form-control text-start pb-3 border-0">UserName</label>
            <input onInput={usernameChange}  type="text" id="username" placeholder='UserName' className='form-control border-top-0 border-end-0 border-start-0'/>
          </div>
          <div className='my-3'>
            <label htmlFor="userAge" id="label2" className="d-none form-control text-start pb-3 border-0">UserAge</label>
            <input onInput={userAgeChange} type="text" id="userAge" placeholder='UserAge' className='form-control border-top-0 border-end-0 border-start-0'/>
          </div>
          <div className='my-3'>
            <label htmlFor="email" id="label3" className="d-none form-control text-start pb-3 border-0">UserEmail</label>
            <input onInput={emailChange} type="Email" id="email" placeholder='UserEmail' className='form-control border-top-0 border-end-0 border-start-0' />
          </div>
          <div className='my-3'>
            <label htmlFor="password" id="label4" className="d-none form-control text-start pb-3 border-0">UserPassword</label>
            <input onInput={passwordChange} type="password" id="password" placeholder='UserPassword' className='form-control border-top-0 border-end-0 border-start-0'/>
          </div>
            <button className='btn btn-success mt-3'>Send Message</button>
        </form>
        </div>
    </div>
  )
}
