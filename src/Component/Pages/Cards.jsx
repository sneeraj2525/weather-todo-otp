import React from 'react'
import img1 from '../../images/why-us-1-1.png'; 
import img2 from '../../images/why-us-1-2.png'; 
import img3 from '../../images/why-us-1-3.png'; 

const Cards = () => {
    

    const cardBox = [
        { id: 1, img:[img1], title: "Card 1", content: "This is card 1." },
        { id: 2, img:[img2], title: "Card 2", content: "This is card 2." },
        { id: 3, img:[img3], title: "Card 3", content: "This is card 3." },
        { id: 4, img:[img1], title: "Card 4", content: "This is card 4." },

      ];
    
    
  return (
    <>
    <section className='card-box'>
        <div className='container'>
        <div className='card-box-title'>
            <h2 className='text-center fw-bold mb-5'>Why Us Crypto Exchange</h2>
        </div>
            <div className='row g-3'>
                { cardBox.map( (cardBox ) => (
                    
                        <div className='col-md-3' key={cardBox.id}>
                            <div className='card grid-box'>
                                <div className='card-body text-center' >
                                    <img src={cardBox.img} alt={cardBox.img} style={{ width: "150px" }}/>
                                    <h3>{cardBox.title}</h3>
                                    <p>{cardBox.content}</p>
                                </div>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Cards;