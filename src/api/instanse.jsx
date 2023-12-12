import axios from 'axios'
const instanse = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdG9pbiI6ImFkbWluIiwiY29udGFjdCI6Ijk5ODkxMzM0MDI4MiIsImlhdCI6MTY5Mjg2NjMxM30.XqaHB2B1n40as3DmiKmIXFBVM1cecamTNOdI52xku5A',
    'Content-Type': 'application/json'
  },
  // body:{}
})
const data_delete = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdG9pbiI6ImFkbWluIiwiY29udGFjdCI6Ijk5ODkxMzM0MDI4MiIsImlhdCI6MTY5Mjg2NjMxM30.XqaHB2B1n40as3DmiKmIXFBVM1cecamTNOdI52xku5A',
    'Content-Type': 'application/json'
  },
  // body:{}
})


export { instanse , data_delete }
