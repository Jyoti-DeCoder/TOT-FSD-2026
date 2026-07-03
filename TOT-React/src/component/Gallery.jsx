import React from 'react'
import student1 from '../images/image1.jpg';
import student2 from '../images/image2.jpg';
import GalleryProps from './GalleryProps'; 
function Gallery() {

const student = [{
  pic:student1,
  sroll:"101",
  sname:"Arvind",
  sbranch:"CSE",
  scollege:"ABESEC"},
  {
  pic:student2,
  sroll:"102",
  sname:"Jyoti",
  sbranch:"CSE",
  scollege:"ABESEC"},
  {
  pic:student1,
  sroll:"103",
  sname:"Sarita",
  sbranch:"CSE",
  scollege:"ABESEC"},
  {
  pic:student2,
  sroll:"104",
  sname:"Prashant",
  sbranch:"CSE",
  scollege:"ABESEC"}
]

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
    <div style = {{
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid green",
          height: "2000px",
          width: "800px",
          backgroundColor: "cyan"}}>
{/* <h2> Welcome to Photo Gallery</h2>
<div>
<img src = {student1} height={200} width= {200} alt = 'student image' /></div>
<div>
<img src = {student2} height={200} width= {200} alt = 'student image' /></div> */}
{/* <GalleryProps
    pic={student1}
    sroll="101"
    sname="Jyoti"
    sbranch="CSE"
    scollege="ABESEC"
/>
<GalleryProps
    pic={student2}
    sroll="102"
    sname="Kirti"
    sbranch="CSE"
    scollege="ABESEC"
/> */}
{/* 
    <GalleryProps data={ student[0]}/>
<GalleryProps data={ student[1]}/>
    <GalleryProps data={ student[2]}/>
    <GalleryProps data={ student[3]}/> */}

    {
      student.map((ele)=>(
        <div>
          <GalleryProps data = {ele} />
        </div>
      )
      )

    }
    </div>
    </div>
  )
}

export default Gallery