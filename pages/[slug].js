import React from "react";
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from "react-markdown";

export default function Post({post}){
  

  return(
    <div>
      
      <div className="container">
        <br/><br/><br/>
        
        <ReactMarkdown source={post.content} escapeHtml={false} />
        
        <br/><br/>
        <br/><br/>
      </div>
    </div>
  )
}

export async function getStaticPaths(){
  const { API_URL } = process.env;
  
  const res= await fetch(`${API_URL}/posts`);
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.Slug }
  }));
  

  return{
    paths,
    fallback: false
  };


}


export async function getStaticProps({ params }){
  const { API_URL } = process.env;
  const { slug } = params; 

  const res = await fetch(`${API_URL}/posts?Slug=${slug}`)
  const data = await res.json();
  const post = data[0];

  return{
    props: {post}
  };
}