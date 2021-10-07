import React, {Component, useState, useEffect, } from "react"

const UsersData = () => {

    const [setUsers, users] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(data => {       
            // const usersList = data.map((element)=>{
            //     // console.log(element)
                // return <UserList 
                //     key={element.id} 
                //     name={element.name} 
                //     email={element.email}
                //     />
            // })
            setUsers(data);
            // this.setState({
            //     users: users, 
            //     })
            // })
        })
    },[])

    const getUserByPlace = (index) => {
        return users[index];
    }

    const getUsersList = () => {
        return users && users.map((element, index) => {
            return <UserList 
                key={element.id} 
                name={element.name} 
                email={element.email}
            />;
        });
    }

    return (
        <div>{getUsersList}</div>
    );
}

class UsersData extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
        }
    }
    
   componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(response => response.json())
            .then(data => {       
            const users = data.map((element)=>{
                // console.log(element)
                return <UserList 
                    key={element.id} 
                    name={element.name} 
                    email={element.email}
                    />
            })
            this.setState({
                users: users, 
                })
            })
    }
        
    render() {
        return (
            <div>
                {this.state.users}
            </div>
        )
    }
}

  function UserList(props) {
        return (
            <div>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
            </div>   
        )
    };
    
export default UsersData