import React from 'react'



const CurrentDate:React.FC= () => {

    let now: Date =  new Date();
    const todayDate = now.toDateString(); //covert date to string

   
    const monthTo = now.toLocaleString('default',{month:'long'}) // only time
    
  
    
   

    const covert = new Date(todayDate)
   

    const splitDate = todayDate.split(" ")
  
    var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";



let month_value = now.getMonth();
let day_value = now.getDate();
let year_value = now.getFullYear();


function daysToSrting() {
    const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[now.getDay()]
  }
  
  // console.log("Date covert" + " " + daysToSrting())
//     console.log(months[month_value] + " " + day_value+", " + year_value)

  return (
    <div className='w-full justify-start'>
        <h1 className='font-semibold'>{daysToSrting()}</h1>
        <div className='mt-24'>
          <span className='sm:text-3xl font-medium'>{day_value} </span>
          <span className='sm:text-3xl font-medium'>{months[month_value]}</span>
        </div>
    </div>
   
  )
}

export default CurrentDate