import React from 'react'
import Image from 'next/image';
import Trash from "../../../public/assets/icons/trashCan.svg";
// import refresh from "../../../public/assets/icons/refresh.svg"

function ListingInbox() {


const mailLists = [
    {
        sender:"LinkdeIn job", header:"Welcome to huppy application", time:"9:00am"
    },
    {
        sender:"Jacob", header:"Welcome to huppy application", time:"9:00am"
    },
    {
        sender:"Jacob", header:"Welcome to huppy application", time:"9:00am"
    },
    {
        sender:"Jacob", header:"Welcome to huppy application", time:"9:00am"
    },
    {
        sender:"Jacob", header:"Welcome to huppy application", time:"9:00am"
    },
    {
        sender:"Jacob", header:"Welcome to huppy application", time:"9:00am"
    }
]

  return (
    <div className='px-8'>
        <div>
            <label>
                <input type="checkbox"  /> 
                {/* <Trash /> */}
            </label>
            </div>
        {mailLists.map((mail, index)=>
             <div key={index} className='border-b-2' >
               <label className='flex flex-row items-center'>
                    <input type="checkbox" /> 
                    <svg></svg>
                    <h5 className='pl-1.5 w-1/6'>{mail.sender}</h5>
                    <p className='pl-7 w-4/6'>{mail.header}</p>
                    <p className='w-1/6 justify-end'>{mail.time}</p>
                </label>
             </div>
        )}
       
       
        </div>
  )
}

export default ListingInbox