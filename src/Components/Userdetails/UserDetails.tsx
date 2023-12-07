
interface IDetails{
    user:{
        email:string ,
        pass:string
    }
    
}

const UserDetails = ({user  }:IDetails) => {
  return (
    <div style={{margin:'1.5rem'}}>
      {user.email}
    </div>
  )
}

export default UserDetails
