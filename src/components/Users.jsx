import { useState, useEffect } from "react";
import "./Users.css";


const Users = (props) => {
    
    const [users, setUsers] = useState([]);

    

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log("data", data);
            setUsers(data);
            
        };

        fetchUser();
    }, [])

    return (
        <div className="users">           
            <ul>
                {users.map(user => <li>{user.name}</li>)}
            </ul>
        </div>   
        
        
    );
};

export default Users;