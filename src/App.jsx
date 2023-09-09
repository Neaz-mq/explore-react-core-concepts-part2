import './App.css'
import Counter from './assets/Counter';
import Friends from './assets/Friends';
import Team from './assets/Team';
import Users from './assets/Users';



function App() {
  
  function handleClick(){
    alert('button clicked');
  }
  const handle = () =>{
    alert('click 2');
  }

  const addToFive = (num) => {
    alert(num + 5)
  }


  return (
    <>
   
      <h3>React Core Concepts 2</h3>

     <Friends></Friends>

      <Users></Users>

      <Team></Team>


      <Counter></Counter>
      

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handle}>Click2</button>
      <button onClick={()=>{alert('third click')}}>third</button>
      <button onClick={() => addToFive(3)}>Four</button>
 
    
    </>
  )
}

export default App
