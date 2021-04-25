import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GetQuotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    const baseUrl = "https://freequote.herokuapp.com/";
    axios
      .get(baseUrl)
      .then(({ data }) => {
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Container>
        <div className="content">
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
                  {quote}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="text-center">
          <Button variant="success" size="large" onClick={getQuotes}>
            Next Quote
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default GetQuotes;
