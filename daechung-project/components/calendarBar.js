import { cls } from "../libs/utils";
import moment from "moment";
import React, { useEffect, useState } from "react";

const weather = [
  {
    name: "sun",
    emoji: "๐",
    key: 0
  },
  {
    name: "cloud",
    emoji: "โ๏ธ",
    key: 1
  },
  {
    name: "rain",
    emoji: "โ๏ธ",
    key: 2
  },
  {
    name: "snow",
    emoji: "โ๏ธ",
    key: 3
  },
  {
    name: "lightning",
    emoji: "โก",
    key: 4
  },
]

const mood = [
  {
    name: "smile",
    emoji: "๐",
    key: 0
  },
  {
    name: "laugh",
    emoji: "๐",
    key: 1
  },
  {
    name: "lovely",
    emoji: "๐ฅฐ",
    key: 2
  },
  {
    name: "frown",
    emoji: "๐",
    key: 3
  },
  {
    name: "tear",
    emoji: "๐ญ",
    key: 4
  },
]
const dayOfWeek = ['์ผ', '์', 'ํ', '์', '๋ชฉ', '๊ธ', 'ํ '];

export default function CalendarBar() {
  const [date, setDate] = useState(moment())
  const [yearClicked, setYearClicked] = useState(false);
  const [selectedYear, setSelectedYear] = useState(Number(date.clone().format("YYYY")))
  const [today, setToday] = useState(date.clone().format("YYYY-MM-DD"))

  const handleMonth = (num) => (num ? setDate(date.clone().add(1, 'month')) : setDate(date.clone().subtract(1, 'month')));
  const handleYear = (num) =>(num ? setDate(date.clone().add(1, 'year')) : setDate(date.clone().subtract(1, 'year')));
  const returnToday  = () => setDate(moment());

  const buildCalendar = () => {
    const dateStartWeek = date.clone().startOf('month').week(); 
    // date๊ฐ ์ํ๋ ๋ฌ์ ์ฒซ๋ฒ์จฐ ์ฃผ๊ฐ ์ด๋ฒ๋๋์ ๋ช๋ฒ์งธ ์ฃผ์ธ๊ฐ

    const dateEndWeek = date.clone().endOf('month').week() === 1 ? 53 : date.clone().endOf('month').week();
     // date๊ฐ ์ํ๋ ๋ฌ์ ๋ง์ง๋ง ์ฃผ๊ฐ ์ด๋ฒ๋๋์ ๋ช๋ฒ์งธ ์ฃผ์ธ๊ฐ
     // ๋ง์ง๋ง ์ฃผ๊ฐ 1์ด ๋์ค๋ ๊ฒฝ์ฐ(12์์ ๋ง์ง๋ง์ฃผ์์ 1์์ด ๊ณผ๋ฐ์์ผ๋)์ 53์ผ๋ก ์์ ํด์ฃผ์ด์ผ ํจ 

     let calendar = [];

     for (let week = dateStartWeek; week <= dateEndWeek; week++) {
      calendar.push(
        <div key={week} className="grid grid-cols-7 items-center justify-items-center">
        {[Array(7).fill(0).map( (n,i) => {
          let current = date.clone().week(week).startOf('week').add(i, 'day');

          const isMonth = current.format('MM') !== date.format('MM');
          const isToday = current.clone().format(`YYYY-MM-DD`) === today;
          

          return <span key={i} className={cls("text-center hover:font-extrabold", isMonth ? "text-gray-200": "", !isMonth&& isToday ? "w-5 h-5 ring-2 ring-[#C5E5E9] rounded-full" :"")} >{current.format("D")}</span>
        })]}  
        </div>
        
      )
     }
     return calendar
  }
  
  
  const onClickYear = () => {
    setYearClicked(prev => !prev)
  }
  
  const buildYear = () => {
    let years = [];


    const onClickSelectedYear = (i) => {
      setDate(date.clone().year(i))
      setYearClicked(false);
    }

    for (let i = selectedYear; i < selectedYear + 12 ; i++) {
      years.push(<span className={cls(i==date.clone().format('YYYY') ? "text-textPoint": "")} onClick={() =>onClickSelectedYear(i)}>{i}</span>)
    }
    
    return years
  }


  const handleSelectedYear = (num) => num ? setSelectedYear(selectedYear + 12): setSelectedYear(selectedYear - 12);
  
  return (
    <div className="select-none">
    {yearClicked ?<div className="fixed top-0 bottom-0 z-10 w-screen h-srceen opacity-0" onClick={onClickYear}></div> : null}
    <div className="w-64 bg-white">
      <span className="text-xl pl-3">Calendar</span>
      <div className="mt-3 pl-3">
      <div className="flex space-x-3 text-gray-500">
        <span className="text-sm">weather</span>
        <div className="space-x-1"> {weather.map(w=><span className="ring-gray-300 hover:ring-[1px] p-[2px] rounded-full" key = {w.key}>{w.emoji}</span>)}</div>
      </div>
      <div className="flex space-x-[1.69rem] text-gray-500">
        <span className="text-sm">mood</span>
        <div className="space-x-1"> {mood.map(m=><span  className="ring-gray-300 hover:ring-[1px] p-[2px] rounded-full" key = {m.key}>{m.emoji}</span>)}</div>
      </div>  
      </div>
      <div className="relative border px-5 pb-5 pt-2  text-sm m-2">
        <div className="py-2 flex items-center flex-row space-x-1">
          <span className="text-gray-600">{date.clone().format('YYYY')}</span>
          <span className="cursor-pointer" onClick={onClickYear}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
        <div className="flex justify-center items-center space-x-5 pt-3 pb-5 ">
          <span onClick={() => handleYear(0)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          </span>
          <span onClick={()=>handleMonth(0)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="w-20 text-center font-semibold" >{date.clone().format("MMMM")}</span>
          <span onClick={()=>handleMonth(1)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span onClick={() => handleYear(1)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-7 justify-items-center items-center pb-3">
          {dayOfWeek.map((d,i) => (
              <span key={i} className={cls("text-sm text-gray-500" ,
              d === "ํ " ? "text-blue-300" :"",
              d === "์ผ"  ? "text-red-300" :""
              )}>{d}</span>
          ))}
          </div>
        <div className="space-y-3" >{buildCalendar()}</div>
        {yearClicked ? 
        <div className="absolute bg-itemBg shadow-2xl top-12 p-3 z-20 rounded-md">
          <div className="flex justify-end space-x-1 pb-2">
          <button onClick={()=>handleSelectedYear(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <button onClick={()=>handleSelectedYear(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>  
          </div>
          <div className="grid grid-cols-4 gap-4">
            {buildYear()}
          </div>
        </div>
        : null}

      </div>
    </div>  
    </div>
    
  );
};