import React from 'react'

const Affiliate = ({ iframe }: any) => {
  return (
    <div className='affiliate'>
      <iframe
        sandbox='allow-popups allow-scripts allow-modals allow-forms allow-same-origin'
        src={iframe.props.src}
        scrolling='off'
      />
    </div>
  )
}

export default Affiliate
