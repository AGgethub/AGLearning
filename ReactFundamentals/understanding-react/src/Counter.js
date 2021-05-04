import {Component} from 'react';

class Counter extends Component {
  
   state ={
      count: 0
   }
  
   increment = () => {
      this.setState({
          count: this.state.count + 1
      });
       
       console.log(this.state.count);
   }
   
    render() {
        return (
            <>
                <div>Result: {this.state.count}</div>
                <button onClick={this.increment}>+</button>
            </>
        );

   }

}

export default Counter;