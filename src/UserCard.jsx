export default function UserCard({userData}){
    if(!userData)
        return null

    return(
        <div>
            <img src={userData.avatar_url} alt="img" />
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
            <p>Repos: {userData.public_repos}</p>
            <p>followers: {userData.followers}</p>
            <p>following: {userData.following}</p>
        </div>

    )
}