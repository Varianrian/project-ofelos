import React from 'react'

function CameraContainer() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='aspect-video w-[80%] max-w-[540px] bg-slate-800 rounded-3xl m-16 overflow-hidden'>
          {/* <iframe src='http://172.20.10.2'></iframe> */}
          <iframe
            src="https://www.youtube.com/embed/TePhNEJr9mg?si=OCgtQCxz6ZcXXHrk"
            title="YouTube video player"
            className='w-full h-full'
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default CameraContainer