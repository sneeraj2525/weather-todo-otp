import React from 'react'
import '../../Accordian.css'
import AccordianContainer from './AccordianContainer'

let accordianContent = [
    {
        id:"1",
        heading:"What is the use of dummy JSON?",
        content: "Dummy JSON is a Node utility that allows you to generate random JSON data using Handlebars templates.",
    },
    {
        id:"2",
        heading:"What is a JSON post?",
        content: "JSON, or JavaScript Object Notation, is a minimal, readable format for structuring data. It is used primarily to transmit data between a server and web application, as an alternative to XML. ",
    },
    {
        id:"3",
        heading:"Is fakestore API free?",
        content: "FakeStoreAPI is a free online resource packed with realistic e-commerce data. Whether you're testing product listings, user authentication, or order processing, FakeStoreAPI has you covered.",
    },
    {
        id:"4",
        heading:"What is dummy data used for?",
        content: "Dummy data, also known as demo data, is simulated information that mimics the characteristics of real data but generally lacks any meaningful content. ",
    },
    {
        id:"5",
        heading:"How to install a JSON server?",
        content: "To install JSON Server, ensure you have Node.js installed, then open your terminal or command prompt, navigate to your project directory, and run npm install -g json-server. ",
    },
]

const Accordian = () => {

  return (
    <div>
    <h2 className='text-center fw-bold my-5'>Frequently Asked Questions ? </h2>
      <AccordianContainer content={accordianContent} />
    </div>
  )
}

export default Accordian;