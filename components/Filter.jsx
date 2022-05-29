import { useEffect, useRef, useState } from "react";
import classes from "../styles/Filter.module.css"

const Filter = () => {
  const [clearBG, setClearBG ] = useState("bg-black");
  const locationBtn = useRef(null);
  const checkIn = useRef(null);
  const checkOut = useRef(null);
  const guests = useRef(null);
  const arrayOfAllBtn = [locationBtn, checkIn, checkOut, guests];
  const toggleFunction = (target) =>{
    if(target.elementType === "button"){
      arrayOfAllBtn.forEach(element => {
       element.current.classList.value = element.current.classList.value.split(" ")[0];
      });
    return target.classList.toggle(clearBG);
   }
   arrayOfAllBtn.forEach(element => {
    element.current.classList.value = element.current.classList.value.split(" ")[0];
  });
   target.closest("button").classList.toggle(clearBG)
   console.dir(target);
  }
  useEffect(() =>{

    const bg = (e) => {
      if(e.target.closest("div") && e.target.closest("div").classList.value === "Filter_form__F4TX5"){
        return
      }
     
      arrayOfAllBtn.forEach(element => {
      if(element.current.classList.value.split(" ")
      [element.current.classList.value.split(" ").length - 1] === "bg-black"){
          element.current.classList.value = `${element.current.classList.value.split(" ")[0]}`
        }
      });

    }
    window.addEventListener("click", bg)
    return () =>{
      window.removeEventListener("click", bg)
    }
  },[])

  return (
    <div className={classes["filter"]}>
      <div className={classes["filter-container"]}>
        <div className={classes["filter-cover"]}>
          <div className={classes["form"]}>
          <button
          className={["locationBtnClass"]}
          ref={locationBtn}
          onClick={({target}) =>{
            toggleFunction(target)
          }}
          ><span>Location</span> <p>Where are you going</p></button>
          <button
          className={["checkInClass"]}
          ref={checkIn}
          onClick={({target}) =>{
            toggleFunction(target)
          }}
          ><span>Check In</span> <p>Add Dates</p></button>
          <button
          className={["checkOutClass"]}
          ref={checkOut}
          onClick={({target}) =>{
            toggleFunction(target)
          }}
          ><span>Check Out</span> <p>Add Dates</p></button>
          <button
          className={["guestsClass"]}
          ref={guests}
          onClick={({target}) =>{
            toggleFunction(target)
          }}
          ><span>Guests</span> <p>Add Guests</p></button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Filter