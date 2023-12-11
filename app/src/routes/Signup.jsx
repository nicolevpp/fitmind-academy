import { useState } from 'react';
import Nav from '../components/Nav';
import { validEmail, validName, validPassword } from '../Regex';
import axios from 'axios';



export default function Signup() {
  const [email, setEmail] = useState('');
  console.log(email);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [match, setMatch] = useState('');


  const validationEmail = validEmail.test(email);
  const validationName = validName.test(name);
  const validationPassword = validPassword.test(password);
  const validationMatch = password === match;



  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      email,
      password
    };


    await axios.post('/api/users', user)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Nav/>


      <div className="flex">

        <div className=" hidden md:hidden lg:flex w-2/4 overflow-hidden ">
          <img className=" h-screen pt-16" src="src/assets/signupfit.jpg" alt=""/>
        </div>


        <div className="  pt-16 m-auto flex justify-center items-center h-screen w-3/6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>


            <div className={'flex flex-row gap-4 border-b-2 w-80 p-4 group ' + (name ? '' : ' focus-within:border-sky-600 border-zinc-700 ') + (name.length>0 ? (validationName ? ' border-green-500' : 'border-red-600 ') : '')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
              <input
                className=" w-4/5 focus-visible:outline-0 "
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}/>

            </div>

            <div className={'flex flex-row gap-4 border-b-2 w-80 p-4 group ' + (email ? '' : ' focus-within:border-sky-600 border-zinc-700 ') + (email.length>0 ? (validationEmail ? ' border-green-500' : 'border-red-600 ') : '')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <input className=" w-4/5 focus-visible:outline-0 " type="text" name="email" placeholder="Correo electrónico" value={email}
                onChange={(e) => setEmail(e.target.value)}/>

            </div>

            <div className={'flex flex-row gap-4 border-b-2 w-80 p-4 group ' + (password ? '' : ' focus-within:border-sky-600 border-zinc-700 ') + (password.length>0 ? (validationPassword ? ' border-green-500' : 'border-red-600 ') : '')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>


              <input className="w-4/5 focus-visible:outline-0 " type="password" name="password" placeholder="Contraseña" value={password}
                onChange={(e) => setPassword(e.target.value)}/>

            </div>

            <div className={'flex flex-row gap-4 border-b-2 w-80 p-4 group ' + (match ? '' : ' focus-within:border-sky-600 border-zinc-700 ') + (match.length>0 ? (validationMatch ? ' border-green-500' : 'border-red-600 ') : '')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>


              <input className=" w-4/5 focus-visible:outline-0 " type="password" name="match" placeholder="Confirmar contraseña" value={match}
                onChange={(e) => setMatch(e.target.value)} />

            </div>

            <button disabled={validationName&&validationEmail&&validationPassword&&validationMatch ? false : true} className="bg-red-700 mt-4 rounded-md py-3 px-8 text-white hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-red-700/75" type="submit" >Registrarme</button>
          </form>

        </div>





      </div>



    </>

  );
}
