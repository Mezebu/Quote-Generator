import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GetQuotes = () => {
  const [data, setData] = useState([]);

  const { text, author } = data;

  const getQuotes = () => {
    const url = "https://type.fit/api/quotes";
    axios.get(url).then((response) => {
      let data = response.data;
      let quoteNum = Math.floor(Math.random() * data.length);
      let randomQuote = data[quoteNum];

      setData(randomQuote);
    });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="App">
      <Container>
        <div className="content">
          <div className=" text-center animate__animated animate__fadeInLeft">
            <h1>Quote Generator</h1>
          </div>

          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th scope="col" className="text-center quote-header">
                  {author}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center table-warning">
                <td className="quote-body" colSpan="4">
                  {text}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="p-1">
            <Button variant="success" size="large" onClick={getQuotes}>
              New Quote
            </Button>
          </div>
          <div className="p-1">
            <Button
              variant="light"
              size="large"
              href={`https://twitter.com/intent/tweet?text=${text} ${author}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter h5" style={{ color: "blue" }}></i>
            </Button>
          </div>
          <div className="p-1">
            <Button
              variant="light"
              size="large"
              href={`whatsapp://send?text=${text} ${author}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp h5" style={{ color: "green" }}></i>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetQuotes;
