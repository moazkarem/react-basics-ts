/* eslint-disable prefer-const */
// import Heading from "./Components/Heading/Heading"
import { useState } from "react"
import Navbar from "./Components/NavBar/Navbar"
import Form from "./Components/Form/Form"
import UserDetails from "./Components/Userdetails/UserDetails"

const App = () => {
  const [toggle , setTogle] = useState(false)
  const logo = "My Logo"
  let moaz = 10
  let about = "About Us"
  // let myTitle = "Heading"
  const [user , setuser]=useState({
    email:'',
    pass:''
})
  return (
    <div>
      <Navbar mylogo={logo} moaz={moaz} about={about} toggle={toggle} setTogle={setTogle} />
      {/* <Heading title={myTitle}>
        <span>i'm childern</span>
      </Heading> */}
      {toggle?<UserDetails user={user} />:
      <Form user={user} setuser={setuser} setTogle={setTogle}/>}
      
    </div>
  )
}

export default App
