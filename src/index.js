import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {lattZZ: null, errorMessage: ''};
    
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                //we called setState!!!!
                this.setState({lattZZ: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }

   // React says we have to define render!!
    render () {
        if(this.state.errorMessage && !this.state.lattZZ){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lattZZ){
            return <div> latitude: {this.state.lattZZ}</div>
        }

        if(!this.state.errorMessage && !this.state.lattZZ){
            return <div>loading!</div>
        }
    }
}
ReactDOM.render(
    <App></App>, document.querySelector('#root')
);