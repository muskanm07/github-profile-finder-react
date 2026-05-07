import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import UserCard from './UserCard'
import Loading from './Loading'

function App() {
 const [username,setUsername]=useState("")
 const [userData,setUserdata]=useState(null)
 const [loading,setLoading]=useState(false)
 const [error,setError]=useState("")

 
  const handleSearch=async()=>{
    try{
       setLoading(true)
      setError("")
     const result=await fetch(`https://api.github.com/users/${username}`)
     const data=await result.json()
     console.log(data)
     setUserdata(data)
    }catch(e){
      setError("user not found")
    }finally{
      setLoading(false)
    }
  }
  
   
   
  return (
    <>
      <SearchBar
      username={username}
      setUserName={setUsername}
      handleSearch={handleSearch}/>
      {loading &&<Loading/> }
     
     {userData && <UserCard userData={userData} />}
    
    </>
  )
}

export default App
