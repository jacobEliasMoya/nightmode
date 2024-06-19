import { useState } from 'react'
import Button from './components/Button'
function App() {


  const [isToggled , setToggled] = useState(false);

  const toggleState =() =>{
    setToggled(prev => !prev);
    console.log(isToggled);
  }

  return (
    <div className={isToggled ? "container" : "container active"} >
    
        <Button
          clickFunction={toggleState}
          buttonText={isToggled ? "Night Mode" : "Day Mode"}
          buttonClass={isToggled ? "btn" : "btn active"}
        />    
      </div>
  )
}

export default App
