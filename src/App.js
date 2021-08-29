import {useState, useRef, useEffect} from 'react'
import Home from './screens/Home'
import './styles/home.scss'
import CustomCursor from './customCursor/index'
import useLocoScroll from './hooks/useLocoScroll'
import Loader from './components/Loader'

function App() {
  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)
  
  const [timer, setTimer] = useState(5)
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
      {/* <CustomCursor /> */}
      {preloader ? (
        <Loader />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
