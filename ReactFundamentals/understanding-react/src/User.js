

const User = ({userName,tweet,working}) => {

    return (
        <div>
            <h2>{userName}</h2>
            <p>{tweet}</p>
            <p>{working}</p>
        </div>
    )
}

export default User;