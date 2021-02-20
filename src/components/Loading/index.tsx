import React from 'react'
import './style.scss'

const Loading: React.FC = () => {
  return (
    <div className='loading'>
      <div className='loading-icon'></div>
    </div>
  )
}
export default React.memo(Loading)
