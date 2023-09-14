import React from 'react'

const DeleteAccount: React.FC=()=> {
  return (
    <div>
      <h2 className="text-xl font-semibold pb-2 pt-8">Delete Account</h2>
      <p className='text-xs pb-8'>Once you delete your account and account data, there is no going back.</p>
      <div className='w-1/2 grid grid-cols-2'>
        <form >
            <div>
                <label className='block'>Confirm email</label>
                <input 
                    type="email"
                    name="email"
                    className=' w-full px-3 py-2 border-0 rounded mb-6 '
                />
            </div>
            
                <button className='w-1/2 bg-primary-warning py-2 text-white rounded-xl'>Delete Account</button>
           
        </form>
        </div>
    </div>
  )
}

export default DeleteAccount
