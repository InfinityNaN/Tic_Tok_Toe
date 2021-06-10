import React, { useState } from "react";
import Icon from "./Components/Icon"
// importing react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// importing react strap
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
       ticArray.fill("empty")
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
            return toast("Game is already over,Reload it." , {type: "success"} )
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
        <Container className="p-5">
            <ToastContainer position="bottom-center"></ToastContainer>
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2 text-center">
                              <h1 className="text-success text-uppercase text-center "> 
                              {winMessage} 
                              </h1>
                              <Button
                              color="success"
                              onclick={reloadGame}
                              >
                               Reload Game
                              </Button>
                        </div>
                    ): (
                        <h1 className="text-light text-center">
                              {isCross ? "Wrong's" : "Circle's"} turn
                        </h1>
                    )}
                    <div className="grid">
                         {ticArray.map((value, index) =>(
                             <Card color="warning"onClick= {()=>changeItem(index)}>
                                 <CardBody className="box">
                                     <Icon choice={ticArray[index]}/> 
                                 </CardBody>
                             </Card>
                             
                         ))} 
                    </div>
                </Col>
            </Row>
        </Container>
    )



}
export default App;