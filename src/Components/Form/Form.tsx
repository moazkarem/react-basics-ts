

import './Form.scss'
import { inputData } from '../Data/Data'
import { Fragment } from 'react'
interface Usergdata{
    
        email:string , 
        pass:string
    
}
interface Iform {
    setTogle:(val:boolean)=>void ,
    user:Usergdata ,
    setuser:(user:Usergdata)=>void
}
const Form = ({setTogle , user , setuser}:Iform) => {
   
    
    
    const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const {name , value} = e.target
        setuser({
            ...user,
            [name]:value
        })
    }
    
   
  return (
    <div>
        <h3 style={{margin:'1.5rem 1.5rem'}}>Hello : </h3>
      <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
        {
  inputData.map(item=>(
    <Fragment key={item.name}>
 <div className='inp-wrap'>
       <label htmlFor={item.id}>{item.label}</label>
        <input type={item.type} id={item.id} 
        value={user[item.name]}
       name={item.name}
       onChange={handelChange}
        />
       </div>
    </Fragment>
  ))
       
        }
      
       
     
        
        <button onClick={()=>setTogle(true)}>
            Login
        </button>
      </form>
    </div>
  )
}

export default Form
