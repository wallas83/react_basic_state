import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
class App extends React.Component {
    
    state = {lattZZ: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({lattZZ: position.coords.latitude}),
            err=> this.setState({errorMessage: err.message})
            
        );
    }

    renderContent (){
        if(this.state.errorMessage && !this.state.lattZZ){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lattZZ){
            return <SeasonDisplay lattZZ = {this.state.lattZZ}/>
        }

        
            return <Spinner message="Please accept location request!"/>;
        
    }
      // React says we have to define render!!
    render () {
        return (
            <div className = "border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App></App>, document.querySelector('#root')
);