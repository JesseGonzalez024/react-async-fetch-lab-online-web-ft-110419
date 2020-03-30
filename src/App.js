// create your App component here
import React from 'react'

class App extends React.Component{

    state = {people: []}

    render() {
        return (
            <div>
                <h4>People in space:</h4>
                    <ul>
                        {this.state.people.map((p) => <li>{p.name}</li>)}
                    </ul>
            </div>
        );
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(json => this.setState({people: json.people}))
    }

}

export default App