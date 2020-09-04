import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./../App.css";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const QuestionOfTheDay = () => {
  const [categorys, setcategorys] = useState("");
  const [types, setType] = useState("");
  const [difficultys, setDifficultys] = useState("");
  const [questions, setQuestions] = useState([]);
  const [goodAnswer, setGoodAnswer] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState("");
  const [modalWrongIsOpen, setModelIsOpen] = useState(false);
  const [modalGoodIsOpen, setModalGoodIsOpen] = useState(false);
  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=10").then((response) => {
      let myId = Math.floor(Math.random() * 10);
      setcategorys(response.data.results[myId].category);
      setType(response.data.results[myId].type);
      setDifficultys(response.data.results[myId].difficulty);
      setQuestions(response.data.results[myId].question);
      setGoodAnswer(response.data.results[myId].correct_answer);
      setWrongAnswer(response.data.results[myId].incorrect_answers);
    });
  }, []);
  return (
    <div>
      <Modal
        isOpen={modalWrongIsOpen}
        style={{
          content: {
            backgroundColor: "#FC2622",
            width: "30%",
            height: "20%",
            textAlign: "center",
            fontSize: "x-large",
            position: "absolute",
            left: "30%",
            top: "25%",
          },
        }}
      >
        <h2 className="modal-answer">Uncorrect answer</h2>
        <button
          onClick={() => setModelIsOpen(false)}
          style={{
            backgroundColor: "#FFE74C",
            width: "90px",
            height: "50px",
            borderRadius: "5px",
            color: "black",
            fontSize: "x-large",
          }}
        >
          Close
        </button>
      </Modal>
      <Modal
        isOpen={modalGoodIsOpen}
        style={{
          content: {
            backgroundColor: "#BBFD5D",
            width: "30%",
            height: "20%",
            textAlign: "center",
            fontSize: "x-large",
            position: "absolute",
            left: "30%",
            top: "25%",
          },
        }}
      >
        <h2 className="modal-answer">Correct answer</h2>
        <button
          onClick={() => setModalGoodIsOpen(false)}
          style={{
            backgroundColor: "blue",
            width: "90px",
            height: "50px",
            borderRadius: "5px",
            color: "white",
            fontSize: "x-large",
          }}
        >
          Close
        </button>
      </Modal>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="test">
            <CardText className="daily-question">Question Of The Day</CardText>
            <CardTitle className="question-style">
              <span
                dangerouslySetInnerHTML={{
                  __html: questions,
                }}
              ></span>
            </CardTitle>
            <br />
            <p className="question-category">Question category: </p>
            <p className="category-name">{categorys}</p>
            <p>Level :</p>
             { difficultys === "hard" ? <p style={{color: "#FF0921"}} > {difficultys} </p>
              : difficultys === "medium" ? <span style={{color:"#dc7f9bs"}}> {difficultys} </span>
                :<span style={{color: "#f6b83c"}}> {difficultys} </span>
          
            }
              
            <br />
          </Card> 
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="bordureCardReponse">
          {/* TeRnaire pour affichage reponse soit true/false soit choix multiple*/}
            {types !== "boolean" ? (
              <>
                <div>
                  <button
                    onClick={() => setModelIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#FDF1D8" }}
                  >
                    {" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: wrongAnswer[0],
                      }}
                    ></span>
                  </button>
                  <button
                    onClick={() => setModalGoodIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#E3CACD" }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: goodAnswer,
                      }}
                    ></span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => setModelIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#D1C2EB" }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: wrongAnswer[2],
                      }}
                    ></span>
                  </button>
                  <button
                    onClick={() => setModelIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#E0B5E3" }}
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: wrongAnswer[1],
                      }}
                    ></span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    onClick={() => setModelIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#E0B5E3" }}
                  >
                    {" "}
                    {wrongAnswer}
                  </button>
                  <button
                    onClick={() => setModalGoodIsOpen(true)}
                    className="answer"
                    style={{ backgroundColor: "#D1C2EB" }}
                  >
                    {goodAnswer}
                  </button>
                </div>
              </>
            )}
            {/*Fin TeRnaire*/}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default QuestionOfTheDay;
