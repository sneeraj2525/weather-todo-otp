import React from 'react'

const CarousalIndicator = ({data , currentIdx}) => {
  return (
    <div className='carousal-indicator'>
        {
            data.map((item, idx) => {
                    return <div key={idx} className={idx === currentIdx ? 'activeIndicator' : "inActiveIndicator"}></div>
            })
        }
    </div>
  )
}

export default CarousalIndicator