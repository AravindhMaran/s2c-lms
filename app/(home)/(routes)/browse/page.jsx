"use client"
import React, { useEffect, useState } from 'react'
import CategoryFilter from './_components/CategoryFilter';
import { getCourseList } from '@/app/_services/index'
import CourseList from './_components/CourseList';
function browse() {
  const [courses,setCourses]=useState([]);
  useEffect(()=>{
    getCourses()
  },[])
  const getCourses=()=>{
    getCourseList().then(resp=>{
      console.log(resp);
      setCourses(resp.courseLists)
    })
  }
  return (
    <div>
      <CategoryFilter/>
     {courses?<CourseList courses={courses}/>:null}
    </div>
  )
}

export default browse
