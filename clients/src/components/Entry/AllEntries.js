import React from 'react'
import { Container } from 'react-bootstrap'
import Entry from './Entry'

function AllEntries() {
    return (
        <Container style={{marginTop:"40px" , width:"750px"}}>
            <h2>Transaction History</h2>
            <Entry/>
        </Container>
    )
}

export default AllEntries
