import {useState, useRef, useEffect} from 'react'
import Home from './screens/Home'
import './styles/home.scss'
import CustomCursor from './customCursor/index'
import useLocoScroll from './hooks/useLocoScroll'
import Loader from './components/Loader'

function App() {
  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)
  
  const [timer, setTimer] = useState(1)
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

  setTimeout(() => {
    document.querySelector('.app').style.transform = 'translateY(-100%)'
  }, 1100)

  return (
    <>
      {/* <CustomCursor /> */}
      {preloader ? (
        <Loader />
      ) : (
        <>
        <div className='app'></div>
        <Home />
        </>
      )}
    </>
  );
}

export default App;
