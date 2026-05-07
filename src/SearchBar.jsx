export default function SearchBar({username,setUserName,handleSearch}){

    return(
      <>
        <input 
        value={username}
        onChange={e=>setUserName(e.target.value)}
         type="text" placeholder="Enter Fithub Username" />
         <button onClick={handleSearch}>search</button>
     </>
    )

}