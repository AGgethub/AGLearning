import React, {Component} from 'react';

class ErrorBoundry extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
 }
 //this code below   is a life cycle huck "componentDidCatch" Not sure how to fix but if i delete Error Boundry.js should go back to normal

 componentDidCatch(error, info) {
     this.setState({hasError: true})
 }

 render () {
     if (this.state.hasError) {
         return <h1>Oooops. This is not good</h1>
     }
     return this.props.children
 }

 
 export default ErrorBoundry;