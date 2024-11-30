
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

const RestTime = ({times = []}) => {
   if(times.length == 0)
    return null
   const [rest , setRestTime] = useState('')
   const [salat , setSalat] = useState('')
  useEffect(() => {
    let currentTime = moment().format('HH:mm');
    const index = selectIndex(+currentTime.slice(0,2),+currentTime.slice(3,5)) 
    switch (index) {
      case 0:
        setSalat('Fajr')
        break;
      case 1:
        setSalat('Dhuhr')
        break;
      case 2:
        setSalat('Asr')
        break;
      case 3:
        setSalat('Maghrib')
        break;
      case 4:
        setSalat('Isha')
        break;
    
      default:
        break;
    }
    let h = Math.abs(+currentTime.slice(0,2)-12 - (+times[index].slice(0,2))-12)
    let m = Math.abs(+currentTime.slice(3,5) - (+times[index].slice(3,5)))
    m--;
    let s = 59 
    const id  = setInterval(()=>{
      setRestTime(`${h} : ${m} : ${s}`);
      s++;
      if(s == 60){
        s = 0 
        m--;
        if(m == -1)
          h--
        if (h== -1)
          clearInterval(id)
      }
    },1000)   
    },[]);
      function selectIndex(h , m ) {
        const length = times.length - 1
        for(let i = 0 ; i < length ; i ++){
          const hour = +times[i].slice(0,2)
          const minute = +times[i].slice(3,5)
          if( h === hour){
            if(m < minute)
              return i
            return i+ 1
          }
          else if( h > hour && h < +times[i+1].slice(0,2))
            return i + 1
        }
        return 0
      }
      if(rest)
      return (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white text-xl ">It rest to {salat} salat : </h1>
          <p className="text-white text-lg">{rest}</p>
        </div>
      );
      return null;
};

export default RestTime;