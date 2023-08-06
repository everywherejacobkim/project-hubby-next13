import React from 'react';

const CurrentTime:React.FC = () => {

    let now: Date =  new Date();

    const options: Intl.DateTimeFormatOptions = {
        timeZoneName: 'short',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
       
      };
      
    const formattedTime: string = new Intl.DateTimeFormat('en-US', options).format(now)
    // console.log(formaattedTime)
    let splitTimeZone = formattedTime.split(" ");
    console.log(splitTimeZone);
    return (
        <div className='box-content'>
            <h1 >{splitTimeZone[2]}</h1>
            <div className='mt-10'>
                <h1 className='text-3xl'>{splitTimeZone[0]}</h1>
            </div>
        </div>
    );
}

export default CurrentTime;
