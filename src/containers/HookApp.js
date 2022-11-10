import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import { useState } from "react";
import './App.css'
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
//App component using Functional Component



const HookApp = () => {
    const[robot, changeRobot] = useState([]);
    const[searchField, updateSearchField] = useState("");

    //Using promise
    /*
    function GetDataWithPromise() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {changeRobot(users)})
    }

    GetDataWithPromise();
    */

    //Using AsyncAwait
    async function GetDataWithAsync() {
        try{
            const rawdatas = await fetch("https://jsonplaceholder.typicode.com/users");
            const datas = await rawdatas.json();
            changeRobot(datas);
        }
        catch(error){        
            console.error(error);
        }  
    }
    GetDataWithAsync();
    
    
    const onSearchChange = (event) => {
        updateSearchField(event.target.value);
    }

    const filteredRobots = robot.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if(robot.length === 0){
        return <h1>Loading</h1>
    }
    

    return(
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}></SearchBox> <br/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}></CardList>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
    

    
}

export default HookApp;