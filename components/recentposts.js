import React from "react";
import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import Router, { useRouter } from "next/router";





export default function Posts({post}) {

    const { API_URL } = process.env;
    //console.log("posts recent ",post)
    return(
        <div className="box card justify-content-center shadow-sm p-3 mb-5 rounded-0">
          <div className="row">
{post.image[0]?<div className="col-md-4">
                <img src={API_URL + post.image[0].url} className="w-100" />
            </div>:<></>}
            
            <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h3 className="card-title">{post.title}</h3>
                  <hr className="ligne" />
                  <div className="flex-container">
                    <p className="postAuthor card-text"><i className="fas fa-user"></i>&nbsp;{post.author}</p>
                    <p className="postDate card-text"><i className="far fa-calendar"></i>&nbsp;{post.date}</p>
                  </div>
                </div>
            </div>
          </div>



          <style jsx>{`
              // .card{
              //   background-color: rgb(243, 243, 243, 0.6);
              //   opacity: 1;
              //   margin-top: 50px;
              //   margin-buttom: 450px;
              //   height: 200px;
              //   transition: 0.3s;
              //   cursor: pointer;
              // }
              // .card:hover {
              //   background-color: rgb(255, 255, 255, 1);
              //   transform: translate(0, -10px);
              // }
              .box {
                background-color: rgb(243, 243, 243, 0.6);
                margin: auto;
                margin-top: 5%;
                padding: 20px 50px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                transition: all 0.3s cubic-bezier(.25,.8,.25,1);
              }
              
              .box:hover {
                background-color: white;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                animation-name: example;
                animation-duration: 0.25s;
                border-left: 8px solid #2f5b96;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
              }
              .ligne{
                color: black;
                margin: 7px 0;
              }
              img{
                  width: 350px;
                  height: 180px; 
              }

              .card-title {
                height: 60%;
                font-weight: bolder;
                color: black;
                font-family:'Roboto', 'Poppins', sans-serif;
                font-size: 32px;
              }
              .flex-container{
                height: 30%;
                display: flex;
              }
              .postAuthor{
                float: left;
                padding-right: 120px;
                color: black;
              }
              .postDate{
                position: relative;
                float: right;
                color: black;
              }
              .btn{
                margin-top: 25px;
              }
            `}</style>
        </div>
      

    );

}

export async function getServerSideProps(){
    const { API_URL } = process.env;
  
    const res= await fetch(`${API_URL}/posts`);
    const data = await res.json();
  
  
    return{
      props: {
        posts: data,
      }
    }
  }
  
