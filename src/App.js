// create your App component here
import React from 'react'

class App extends React.Component{

    state = {people: []}
    
    listPeople() {
        if (this.state.people.length > 0) {        
            this.state.people.forEach(function(person){
            return <li>{person.name}</li>})
        }
        
    }

    render() {
        return (
            <div>
                <h4>People in space:</h4>
                    <ul>
                        {this.listPeople()}
                    </ul>
            </div>
        );
    }

    componentDidMount(){
        fetch(" http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(json => this.setState({people: json.people}))
            // .then(this.listPeople())
    }

}

export default App