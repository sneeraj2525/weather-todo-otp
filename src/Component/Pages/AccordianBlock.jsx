import React from 'react'
import ArrowUp from '../../Icons/ArrowUp.jsx'
import ArrowDown from '../../Icons/ArrowDown.jsx'


const AccordianBlock = ({heading, content ,selfIdx , openIdx , setOpen}) => {
  

return (
    <div>
        <section className='my-3'>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-6 mx-auto'>
                    <div className='accordian-body'>
                        <div className='heading-container' onClick={()=> {selfIdx == openIdx ? setOpen(null) :setOpen(selfIdx) }}  >
                            <p className='mb-0'>{heading}</p>
                            <p className='close-accordian mb-0' > {selfIdx == openIdx ? <ArrowUp/> : <ArrowDown/> }  </p>
                        </div>
                        {
                          selfIdx == openIdx ?  <div className='content-container'>
                            <p className='mb-0'>{content}</p>
                        </div> : <></>
                        }
                    </div>
                        
                </div>
            </div>
                
            </div>
        </section>
    </div>
  )
}

export default AccordianBlock