import React from 'react'

function GalleryProps({data}) {
  return (
    <div>
<h2> Student I-card</h2>
<img src = {data.pic} height={200} width={200} />
<h3>Roll: {data.sroll}</h3>
<h3>Student Name: {data.sname} </h3>
<h3>Branch: {data.sbranch}</h3>
<h3>College: {data.scollege}</h3>

    </div>
  )
}

export default GalleryProps