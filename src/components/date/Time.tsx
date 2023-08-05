import React from 'react';

const CurrentTime:React.FC = () => {

    let now: Date =  new Date();

    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        timeZoneName: 'short',
      };
      
    const formaattedTime: string = new Intl.DateTimeFormat('en-US', options).format(now)
    console.log(formaattedTime)
    return (
        <div>
        <h1>{formaattedTime}</h1>
        </div>
    );
}

export default CurrentTime;
