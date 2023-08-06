import React from 'react'



const CurrentDate:React.FC= () => {

    let now: Date =  new Date();
    const todayDate = now.toDateString(); //covert date to string

    // const todayInMilliseconds = new Date(todayDate).getTime();
    // const year = now.getFullYear();   
    // const month = now.getMonth();
    // const day =  now.getDay(); 
    // const timeTo = now.toTimeString() // only time
    const monthTo = now.toLocaleString('default',{month:'long'}) // only time
    // const nowDate: Date = new Date(year, month, day);
  
    
   

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

console.log(day_value)
function daysToSrting() {
    const daysOfWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[now.getDay()]
  }
  
  console.log("Date covert" + " " + daysToSrting())
//     console.log(months[month_value] + " " + day_value+", " + year_value)

  return (
    <div>
        <h1>{daysToSrting()}</h1>
        <div className='mt-10'>
          <span className='text-3xl'>{day_value} </span>
          <span className='text-3xl'>{months[month_value]}</span>
       </div>
        
        
    </div>
   
  )
}

export default CurrentDate