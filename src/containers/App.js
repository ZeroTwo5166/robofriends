import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox'
import { Component } from "react";
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

//Using Class Component

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users=> this.setState({robots: users}))    
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        }

    render(){

        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if(robots.length === 0){
            return <h1>Loading</h1>
        }

        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}></SearchBox> <br/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}></CardList>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

    
}

export default App;