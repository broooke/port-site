import React, {useState} from 'react'
import './style.scss'
import ImageStack from '../ImageStack'


export const pageData = [
    {
      url: "https://images.unsplash.com/photo-1593939535589-8356e421b3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1923&q=80",
      title: "Chanel",
    },
    {
      url: "https://images.unsplash.com/photo-1618436917352-cd3d11ea4d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
      title: "Dior",
    },
    {
      url: "https://images.unsplash.com/photo-1550270428-27e40d58bb7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Hermès",
    },
    {
      url: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
      title: "Yves Saint Laurent",
    },
    {
      url: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      title: "Rolex",
    },
    {
      url: "https://images.unsplash.com/photo-1600704514457-fcd7f8c05a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      title: "ZARA",
    },
    {
      url: "https://images.unsplash.com/photo-1598452963314-b09f397a5c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1401&q=80",
      title: "Gucci",
    },
    {
      url: "https://images.unsplash.com/photo-1564845301949-6eae59181233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      title: "Louis Vuitton",
    },
    {
      url: "https://images.unsplash.com/photo-1587701711862-d52756eacc6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      title: "Supreme",
    }
];



function Hello() {
    const [rotationPosition, setRotation] = useState([-2.650634094186824,-5.997343514216851, -0.41722913131360184, -3.765807192010152, -4.67282435797097, -2.462342243, -1.76786544]);
    const [activeIndex, setActiveIndex] = useState(-1);
    console.log(rotationPosition)

    const handleSetRotation = (itemIndex) => {
        const newRotation = Math.random() * 7 * (Math.round(Math.random) ? 1 : -1)
        const tempState = [...rotationPosition]

        tempState[itemIndex] = newRotation
        setRotation(tempState)
        setActiveIndex(itemIndex)
    }

    return (
        <div data-scroll-section className='text-wrapper'>
            <div className='text-block'>
              <h1>
                  <span
                      className='title-item'
                      onMouseEnter={() => handleSetRotation(0)}
                      onMouseLeave={() => setActiveIndex(-1)}
                  >I'm Nikita.</span><br></br>
                  <span 
                      className='title-item'
                      onMouseEnter={() => handleSetRotation(1)}
                      onMouseLeave={() => setActiveIndex(-1)}
                  >Fullstack Developer.</span><br></br>
                  <span
                      className='title-item'
                      onMouseEnter={() => handleSetRotation(2)}
                      onMouseLeave={() => setActiveIndex(-1)}
                  >Based in Russia.</span><br></br>
                  <span 
                      className='title-item'
                      onMouseEnter={() => handleSetRotation(3)}
                      onMouseLeave={() => setActiveIndex(-1)}
                  >Driven to create</span><br></br>
                  <span
                      className='title-item'
                      onMouseEnter={() => handleSetRotation(4)}
                      onMouseLeave={() => setActiveIndex(-1)}
                  >cool work.</span>
              </h1>
              <div className='image-container'>
                  {pageData.map(({url}, index) => (
                      <ImageStack 
                          key={index}
                          url={url}
                          active={activeIndex===index}
                          rotationPosition={rotationPosition[index]}
                      />
                  ))}
              </div>
                {/* <div>
                    <img src="https://ocean-of-technologies.s3.us-east-2.amazonaws.com/hector_detour03.png" />
                </div> */}
            </div>
        </div>
    )
}

export default Hello
