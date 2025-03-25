import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
   const [showDrap , setShowDrop] =  useState(false)
  return (
    <div className={`white ${showDrap ? "droparea" : "hodearea"} `}
    onDragEnter={()=>setShowDrop(true)}
     onDragLeave={()=>setShowDrop(false)}
        onDrop = {()=> {
            onDrop()
            setShowDrop(false)

        }}
        onDragOver={(e) => e.preventDefault()}
        
     >
        
        DropArea
    </div>
  )
}

export default DropArea