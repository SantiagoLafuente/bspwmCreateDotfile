import Desktop from './Desktop.jsx'
import Components from './Components.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [slider, setSlider] = useState(false);

  function handleClick(){
    setSlider(!slider)
  }
  return (
    <>
      <header>
        <nav>
          <ul className="sections">
            <li><a href="#">Home</a></li>
            <li><a href="#">My Desktops</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='display'>
          <Desktop width={100} height={100}/>
        </div>
        <div className='components'>
          <Components/>
        </div>  
      </main>
      {/* <div className='taskbar'>
        <div className="time">11:30</div>
        <div className='desktops'>
          <ul className='nav-desktop'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
        <div className='sound'>

        </div>
        <div className='tools'>
          <span className='wifi'>
          </span>
        </div>
      </div>
      <section>
        <form action="">
          <input type="text" name="heigth" id=""/>
          <label htmlFor="">x</label>
          <input type="text" name="width" id=""/>
        </form>
      </section> */}
    </>
  )
}

export default App
