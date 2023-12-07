
import './Nav.scss'
interface Iprops{
  mylogo:string ,
  moaz:number ,
  about:string ,
  toggle:boolean,
  setTogle:(val:boolean)=>void
}
const Navbar = ({moaz , mylogo , about , toggle , setTogle}:Iprops) => {
 
const tog = ()=>{
  setTogle(!toggle)
}
 
  return (
    <div className='cont'>
      <ul className="ul-lists">
      <li><a href="#">{mylogo}</a></li>
      <li><a href="#">Home {moaz}</a></li>
      <li><a href="#">{about}</a></li>
      <li><a href="#">Contact</a> </li>
      <li><button onClick={tog}>{toggle?'Logout' : 'Login'}</button></li>
      </ul>
     
    </div>
  )
}

export default Navbar
