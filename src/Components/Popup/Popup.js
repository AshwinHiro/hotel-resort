import React from 'react'

const Popup = ({children}) => {
  return (
    <div className='PopupContainer d-flex justify-content-center align-items-center'>
        <div className='Box px-4 py-3'>
            {children}
        </div>
    </div>
  )
}

export default Popup