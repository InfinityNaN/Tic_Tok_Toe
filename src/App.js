import React, { useState } from "react";
import Icon from "./Components/Icon"
// import react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Card, CardBody, Container } from 'reactstrap';
import "./style.css"

 const ticArray = new Array(9).fill("");
 const App = ()=>{
    let [isCross, setIsCross] = useState(false)
    let [winMessage, setWinMessage] = useState("")
    let [select, setSelect] = useState("x")

    const reloadGame=()=>{

    }
    const checkIsWinner=()=>{

    }
    const changeItem=()=>{

    }
    return(
        <Container>
            <Row>
                <Col md={6} className="offset-md-3">
                    
                </Col>
            </Row>
        </Container>
    )



}
export default App;