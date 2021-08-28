import React from "react";


export default function Card({post}) {
  const { API_URL } = process.env;
 

  return (

    <div className="card shadow p-3 mb-5 rounded ">
      
      <img src={API_URL + post.image[0].url} className="card-img-top" alt={post.title} />
      <div className="card-body h-100">
        <h3 className="card-title font-weight-bolder text-dark">{post.title}</h3>
        <p className="card-text">{post.description}</p>
        <a href="#" className="card-link text-muted"><u>Lire la suite</u></a>
      </div>


      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,100&display=swap');
        .card{
          background-color: rgb(255,255,248, 0.6);
          opacity: 1;
          cursor: pointer;
          transition: 0.15s;
        }


        .card:hover {
          transform: translate(0, -5px);
        }
        .card-title{
          color: black;
          font-size: 32px;
          font-family:'Roboto', sans-serif;
        }
        img{
          height: 400px;
          padding-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
        }
      `}</style>

    </div>
  );
}