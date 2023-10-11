import React from 'react'

function CameraContainer() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[586px] h-[400px] bg-slate-800 rounded-3xl m-16'>
        {/* <iframe src='http://172.20.10.2'></iframe> */}
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/TePhNEJr9mg?si=OCgtQCxz6ZcXXHrk" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default CameraContainer