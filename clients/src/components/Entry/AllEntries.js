import React , {useState , useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Entry from './Entry'
import axios from "axios"
// import useToken from "../Entry/AllEntries"


function AllEntries({setToken}) {
    // const {token , setToken} = useToken()
    

//     const getAllIncome = () => {
//         axios.get("http://localhost:3000/api/v1/expense/getallincome/" , {
//             headers: {
//                 'Authorization': "Bearer:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDllODk0ODg2Nzg4OTY3YTY3MTA1ZTYiLCJpYXQiOjE2MjEwMDI1NjgsImV4cCI6MTY1MjUzODU2OH0.024zEXeoRafyaY26SrV-KLAMPrcuozaX4KUWBUgKpLc " 
//               }
//         })
//         .then((res) => {
//             console.log(res)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

// useEffect(() => {
//         getAllIncome()
//       });



    return (
        <Container style={{marginTop:"40px" , width:"750px"}}>
            <h2 style={{borderBottom:"2px solid black" , padding:"5px"}}>Transaction History</h2>
            <Entry />
            <Entry/>
        </Container>
    )
}

export default AllEntries
