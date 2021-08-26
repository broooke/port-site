import {useState, useRef, useEffect} from 'react'
import Home from './screens/Home'
import './styles/home.scss'
import CustomCursor from './customCursor/index'
import useLocoScroll from './hooks/useLocoScroll'

function App() {
  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)
  
  const [timer, setTimer] = useState(3)
  const id = useRef(null)

  const clear = () => {
      window.clearInterval(id.current)
      setPreloader(false)
  }

  useEffect(() => {
      id.current = window.setInterval(() => {
          setTimer((timer) => timer - 1)
      }, 1000)
  }, [])

  useEffect(() => {
      if (timer === 0) {
          clear()
      }
  }, [timer])

  return (
    <div>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Gaydenko Nikita</h2>
        </div> 
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
