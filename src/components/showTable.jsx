import { Table } from "react-bootstrap";
import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


export function ShowTable(){
    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://training-results-api.onrender.com/').then(res => {
            console.log(res)
            setPost(res.data)
        }).catch(err => console.log(err))
    }, [])

    

    return (
        <>
            <div >
                <Table striped bordered>
                    <tbody>
                    <tr>
                        <td>Test Name</td>
                        <td>Trainer</td>
                        <td>Student</td>
                        
                        <td>Company</td>
                        <td>Date</td>
                        
                        <td>Score</td>
                        <td>Score %</td>
                        <td>Passing Score</td>
                        <td>Pass/Fail</td>
                    </tr>
                    
                    {
                        post.map((item) =>
                            <tr key={item.id}>
                                
                                
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.TestName}
                                    </div>
                                ))}</td>

                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.TrainerName}
                                    </div>
                                ))}</td>

                                
                                

                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.StudentName}
                                    </div>
                                ))}</td>

                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.StudentCompany}
                                    </div>
                                ))}</td>

                                
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {
                                            (data.result.StartTime).substring(0, 10)
                                        }
                                    </div>
                                ))}</td>
                                
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.StudentScore}
                                    </div>
                                ))}</td>
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.StudentScorePercentage}
                                    </div>
                                ))}</td>
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {data.result.passingScore}
                                    </div>
                                ))}</td>
                                <td key={item.results.id}>{item.results && item.results.map(data => (
                                    <div >
                                        {
                                           (data.result.StudentScorePercentage < data.result.passingScore)?

                                           'Fail' : 'Pass'

                                           

                                        }
                                    </div>
                                ))}</td>
                            </tr>
                        )
                    }
                    
                        
                    </tbody>
                </Table>
                
                
            </div>
            
        </>
    )
}