import React from 'react'

function Wrapper({children}) {
  return (
    <div className='xl:max-w-7xl w-full px-7 md:px-0 md:w-11/12 mx-auto'>{children}</div>
  )
}

export default Wrapper