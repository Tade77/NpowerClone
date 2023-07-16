import React from "react";
import "./NewsStyle.css";
import Button from "../Atom/Button";
const News = () => {
  const NewsCard = [
    {
      id: 1,
      image: "/images5.jpeg",
      title: "Npower-Batch C",
      date: "June 25, 2020",
      description:
        "All empower batch c applicants are expected to update their profile and take test for possible shortlisting...",
    },
    {
      id: 2,
      image: "/images5.jpeg",
      title: "N-Power Customer Care",
      date: "June 25, 2020",
      description:
        "All enquires and complains should be channeled through the N-Power customer care line. Details are as follows:",
    },
    {
      id: 3,
      image: "/images5.jpeg",
      title: "NASIMS Test Portal",
      date: "June 25, 2020",
      description:
        "Please make sure your records are fully updated on the NASIMS portal before taking this test...",
    },
  ];
  return (
    <div>
      <div className="h-wrapper">
        <p className="header">Latest News</p>
        <p className="sub--header">
          Keep up with the latest updates about programmes and events
        </p>
      </div>
      <div className="newsCard--wrapper">
        {NewsCard.map((card) => (
          <div key={card.id} className="card">
            <figure className="img-wrap">
              <img className="img" src={card.image} alt="image" />
            </figure>
            <figcaption className="title">{card.title}</figcaption>
            <figcaption className="date">{card.date}</figcaption>{" "}
            <figcaption className="description">{card.description}</figcaption>
          </div>
        ))}
      </div>
      <div className="newPage--btn">
        <a href="https://nasims.gov.ng/news" target="_blank">
          <Button label={"New Page"} buttonType={"login"} />
        </a>
      </div>
    </div>
  );
};

export default News;
