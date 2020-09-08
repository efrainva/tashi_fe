import React,{useState} from 'react'

// import { render } from '@testing-library/react'


const Login = () => {
    const [creds,setcreds] = useState({
        email:'',
        password:'',
    })
    
    const handlechange = (event) => {
        const {name,value} = event.target
        setcreds({...creds,[name]:value})
        console.log(name,value)
    }
  
    const submit = (event) => {
        
    }


        return(<> 
    <input 
        placeholder='email'
        onChange={handlechange}
        value={creds.email}
        name='email'
        />
      <input 
        placeholder='password'
        onChange={handlechange}
        name='password'
        value={creds.password}
        />
        <button onClick={submit}>log in</button>
    </>)
}


export default Login;