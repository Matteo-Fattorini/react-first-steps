import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91j9OWi7SRL._AC_UL200_SR200,200_.jpg",
    title: "FirstBook",
    author: "Matteo Fattorini",
    id: 1,
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91j9OWi7SRL._AC_UL200_SR200,200_.jpg",
    title: "SecondBook",
    author: "Matteo Fattospini",
    id: 2,
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91j9OWi7SRL._AC_UL200_SR200,200_.jpg",
    title: "ThirdBook",
    author: "Matteo FattoAlpini",
    id: 3,
  },
];

function BookList() {
  return (
    <section className="book-list">
      {books.map(e => {
        return <Book key={e.id} {...e}></Book>;
      })}
    </section>
  );
}


const Book = (props) => {
  const { img, title, author } = props;
  const clickHandle = () => console.log("ok");
  const eventConsole = (e) => console.log(e.target);
  return (
    <article className="book">
      <h3>{author}</h3>
      <div className="img-container">
        <img onMouseOver={eventConsole} src={img} alt="" />
      </div>
      <p>{title}</p>
      <button onClick={clickHandle}>Click Me</button>
    </article>
  );
};



ReactDOM.render(<BookList />, document.getElementById("root"));
