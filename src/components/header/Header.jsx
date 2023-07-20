import React from 'react'
import "./header.css"
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // 
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
   const [openDate, setOpenDate] = useState(false);
   const [destination, setDestination] = useState("")
   const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const[options, setOptions] = useState({
      adult:1,
      children:0,
      room:1
    })

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };

   const handleSearch = () => {
      navigate("/hotels", {state : {destination, date, options}});
   }
     
  return (
   <div className="header">
    <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
    <div className="headerList">
        <div className="headerListItem active">
           <HotelIcon/>
           <span>Stays</span>
        </div>
        <div className="headerListItem">
           <FlightIcon/>
           <span>Flights</span>
        </div>
        <div className="headerListItem">
           <CarRentalIcon/>
           <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
           <AttractionsIcon/>
           <span>Attractions</span>
        </div>
        <div className="headerListItem">
           <LocalTaxiIcon/>
           <span>Airport Taxis</span>
        </div>
    </div>
    { type !== "list" && 
      <>
    <h1 className="headerTitle">Where Dreams Meet Reality: Build Your Perfect Getaway Today! </h1>
    <p className="headerDesc">
    Your Personal Travel Concierge: Book and Relax, We'll Handle the Rest!
    </p>
    <button className="headerBtn">Sign In / Register</button>
    <div className="headerSearch">
      <div className="headerSearchItem">
         <HotelIcon className='headerIcon'/>
         <input type='text' placeholder='Where do you want to go?'
         className='headerSearchInput' 
         onChange={e => setDestination(e.target.value)}/>
      </div>
      <div className="headerSearchItem">
         <CalendarMonthIcon onClick={()=> setOpenDate(!openDate)} className='headerIcon'/>
         <span onClick={()=> setOpenDate(!openDate)}className='headerSearchText'> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`} </span>
         {openDate && <DateRange
          onChange={item => setDate([item.selection])}
         showSelectionPreview={true}
         moveRangeOnFirstSelection={false}
         editableDateInputs={true}
         ranges={date}
         className='date'
         minDate={new Date()}
         /> } 
      </div>
      <div className="headerSearchItem">
         <PersonIcon sx={{cursor:"pointer"}} className='headerIcon' onClick={()=> setOpenOptions(!openOptions)}/>
         <span className='headerSearchText'onClick={()=> setOpenOptions(!openOptions)}> {`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
         {openOptions && <div className="options">
         <div className="optionItem">
               <span className="optionText">Adult</span>
               <div className="optionCounter">
                <button 
                disabled={options.adult<1}
                className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                </div>
            </div>
            <div className="optionItem">
               <span className="optionText">Children </span>
               <div className="optionCounter">
                <button
                disabled={options.children<1}
                className="optionCounterButton"onClick={()=>handleOption("children","d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button className="optionCounterButton"onClick={()=>handleOption("children","i")}>+</button>
               </div>
            </div>
      
            <div className="optionItem">
               <span className="optionText">Room</span>
               <div className="optionCounter">
                <button 
                disabled={options.room<1}
                className="optionCounterButton"onClick={()=>handleOption("room","d")}>-</button>
                <span className="optionCounterNumber">{options.room}</span>
                <button className="optionCounterButton"onClick={()=>handleOption("room","i")}>+</button>
                </div>
            </div>
         </div> }
      </div>
      <div className="headerSearchItem">
         <button className="headerBtn" onClick={handleSearch}>Search</button>
      </div>
    </div></>}
   </div>
   </div>
  )
}

export default Header