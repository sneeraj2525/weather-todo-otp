import React, { useState } from 'react';
import '../SelectField/SelectField.css'

const dataList = [
    { id: 1, value: "JavaScript" },
    { id: 2, value: "Python" },
    { id: 3, value: "Java" },
    { id: 4, value: "C++" },
    { id: 5, value: "Ruby" },
    { id: 6, value: "C#" },
    { id: 7, value: "PHP" },
    { id: 8, value: "Swift" },
    { id: 9, value: "TypeScript" },
    { id: 10, value: "Go" }
  ];


const SelectField = () => {
    
    
    const [checkList , setCheckList] = useState([])
    
    const handleSelect=(e)=>{
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setCheckList([...checkList , value])
        } else {
            const filterList = checkList.filter((item) => item !== value);
            setCheckList(filterList);
        }

    }


  return (
    <div>
        <section className='list-container'>
            <div className='card'>
                <div className='list-header'>
                    <h3>Selected Languages</h3>
                </div>
                <div className='card-body'>
                <div className='select-list'>
                    <p className='mb-0'>You Selected : </p>
                    {
                        checkList.map((item ,index) => {
                          return  <span className='badge ms-1 bg-secondary' key={index}>{item}</span>
                        })
                    }
                    
                </div>
                {
                    dataList.map((item)=>(
                       
                    <div className='input-name' key={item.id}>
                        <input
                        type='checkbox'
                        name='name'
                        id={item.id}
                        value={item.value}
                        onChange={handleSelect}
                        />
                        <label>{item.value}</label>
                    </div> 
                    ))
                }
                    
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default SelectField