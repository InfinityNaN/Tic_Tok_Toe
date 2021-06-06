import React, { useState } from "react";
import Icon from "./Components/Icon"
// import react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import react strap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Card, CardBody, Container } from 'reactstrap';
import "./style.css"

 const ticArray = new Array(9).fill("empty");
 const App = ()=>{
    let [isCross, setIsCross] = useState(false)
    let [winMessage, setWinMessage] = useState("")
    let [select, setSelect] = useState("x")

    const reloadGame=()=>{
       setIsCross(false)
       setWinMessage("")
       setSelect("x")
       ticArray.fill("")
    }

    const checkIsWinner=()=>{
        
         if( (ticArray[0] == ticArray[1]) &&
             (ticArray[0] == ticArray[2]) &&
             (ticArray[1] != "empty")
         ){
            setWinMessage(`${ticArray[0]}`+ "wins") 
         }
         else if( (ticArray[3] == ticArray[4]) &&
             (ticArray[3] == ticArray[5]) &&
             (ticArray[3] != "empty")
         ){
            setWinMessage(`${ticArray[3]}`+ "wins") 
         }
         else if( (ticArray[6] == ticArray[7]) &&
             (ticArray[6] == ticArray[8]) &&
             (ticArray[6] != "empty")
         ){
            setWinMessage(`${ticArray[6]}`+ "wins") 
         }
         else if( (ticArray[0] == ticArray[3]) &&
             (ticArray[0] == ticArray[6]) &&
             (ticArray[0] != "empty")
         ){
            setWinMessage(`${ticArray[0]}`+ "wins") 
         }
         else if( (ticArray[1] == ticArray[4]) &&
             (ticArray[1] == ticArray[7]) &&
             (ticArray[1] != "empty")
         ){
            setWinMessage(`${ticArray[1]}`+ "wins") 
         }
         else if( (ticArray[2] == ticArray[5]) &&
             (ticArray[2] == ticArray[8]) &&
             (ticArray[2] != "empty")
         ){
            setWinMessage(`${ticArray[2]}`+ "wins") 
         }
         else if( (ticArray[0] == ticArray[4]) &&
             (ticArray[0] == ticArray[8]) &&
             (ticArray[1] != "empty")
         ){
            setWinMessage(`${ticArray[0]}`+ "wins") 
         }
         else if( (ticArray[2] == ticArray[4]) &&
             (ticArray[2] == ticArray[6]) &&
             (ticArray[2] != "empty")
         ){
            setWinMessage(`${ticArray[2]}`+ "wins") 
         }
         
    }

    const changeItem=(index)=>{
        if(winMessage){
            return toast(winMessage , {type: "success"} )
        }
        if (ticArray[index] === "empty"){
             ticArray[index] =  isCross? "wrong" : "circle"
             setIsCross(!isCross)
        }
        else{
            return toast("already filled", {type: "error"})
        }
        checkIsWinner()
    }
    return(
        <Container>
            <Row>
                <Col md={6} className="offset-md-3">
                    <Card>
                        <CardBody>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )



}
export default App;