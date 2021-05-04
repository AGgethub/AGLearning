import {useState} from 'react';

const Counter2 = () => {
  
   const [count, setReduce] = useState(0);
    

   const decrement = () => {
          setReduce ((prevState) => prevState = prevState + 1);
          console.log(count);
    }
        
    return (
            <>
              <div>Result: {count}</div>
              <button id='down'  onClick={decrement}>-</button>
            </>
 
         );

}


export default Counter2;
