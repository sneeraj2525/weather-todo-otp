import React, { useEffect, useRef, useState } from "react";
import NextBtn from "../../Icons/NextBtn";
import PrevBtn from "../../Icons/PrevBtn";
import "../../Caraosal.css";
import CarousalIndicator from "./CarousalIndicator";
import { useNavigate } from "react-router-dom";



const Carousal = ({ data }) => {

    const [idx , setIdx] = useState(0);

    
    const timer = useRef(null)

    const resetTimer = () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
                setIdx((prevIdx) => prevIdx === data.length - 1 ? 0 : prevIdx + 1 )
            }, 2000)
    }

    useEffect(() => {
        resetTimer();
        return () => {
            clearTimeout(timer.current);
        };
    }, [idx])

    const handlerNext =() => {
        resetTimer();
        idx == data.length - 1 ? setIdx(0) : setIdx(idx+1)
    }

    const handlerPrev = () => {
        resetTimer();
        idx == 0 ? setIdx(data.length - 1) : setIdx(idx-1)
    }

    const navigate = useNavigate()
    const handleNavigate = () => {
      navigate("/login")
    }

  return (
    <>
      <section className="caraousal-container">
        <div className="image-container">
          <img
            src={data[idx].bgImg}
            alt={data[idx].bgImg}
            className="image"
          />
        </div>
        
          <div className="next-btn" onClick={handlerNext}>
            <PrevBtn />
          </div>
          <div className="prev-btn" onClick={handlerPrev}>
            <NextBtn />
          </div>

            <div className="container">
                <div className="text-hero">
                    <span className="badge bg-purple">{data[idx].subTitle}</span>
                    <h1 className="hero-title">{data[idx].title}</h1>
                    <p className="">{data[idx].content}</p>
                    <button className="btn btn-warning px-5" onClick={handleNavigate}>Login</button>
                    <CarousalIndicator data={data} currentIdx={idx} />
                </div>
                
            </div>
      </section>
    </>
  );
};

export default Carousal;
