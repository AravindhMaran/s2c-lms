import request, { gql } from "graphql-request"
const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export const getCourseList=async()=>{
    const query=gql`
    query courseList {
  courseLists {
    name
    banner {
      url
    }
    free
    id
    totalChapters
    tags
    author
  }
}
 `
 const result=await request(MASTER_URL,query);
return result;
}

export const getCourseById=async(id,userEmail)=>{
    const query=gql`
    query course {
  courseList(where: {id: "`+id+`"}) {
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    description
    free
    author
    id
    name
    totalChapters
    youtubeUrl
  }
    userEnrollCourses(where: {courseId: "`+id+`", 
    userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    completedChapter
}
}
  `
  const result=await request(MASTER_URL,query);
  return result;
}

export const EnrollCourse=async(courseId,userEmail)=>{
    const mutationQuery=gql`
    mutation EnrollCourse {
  createUserEnrollCourse(data: {userEmail: "`+userEmail+`", 
  courseId: "`+courseId+`"}) {
    id
  }
}
    `
    const result=await request(MASTER_URL,mutationQuery);
    return result; 
}

export const PublishCourse=async(id)=>{
    const mutationQuery=gql`
mutation EnrollCourse {  
  publishUserEnrollCourse(where: {id: "`+id+`"})
  {
    id
  }
}`

const result = await request(MASTER_URL,mutationQuery);
return result;

}
