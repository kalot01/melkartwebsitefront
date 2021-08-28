import React from "react";
import fetch from 'isomorphic-unfetch';
import Card from '../components/card';
import Link from "next/link";
import Router, { useRouter } from "next/router";
import StickySM from "../components/stickySM";
import Collaborate from "../components/work-with-us2";

export default function blog({posts, page, nbreOfPosts}) {
  //console.log(posts)
  const router = useRouter();
  // console.log(router.query);
  const lastPage = Math.ceil(nbreOfPosts / 4);

  const elts = [...Array(lastPage)];
  console.log("length: ",elts.length)

  return (
    <div>
      <StickySM />
      <section className="blog">
        
        <div className="container-xl">
      
          <div>
            <h2 className="title1 text-center">BLOG</h2>
          </div>
          <div className="row row-cols-2">
            {posts.map(post => (
              <Link href={`/${post.Slug}`} key={post.id}>
                
                <div className="col">
                  <Card post={post} />
                </div>
                
              </Link>

            ))} 
          </div>

          <br/><br/>

          <div className="pagination float-right">
            <button className="btn btn-pag" onClick={()=> router.push(`/blog?page=${page-1}`) }
            disabled ={page <= 1}>&laquo;
            </button>

            {elts.map((elt, index, array) => (
              {...index === (page-1) ?   
                <button className="btn btn-pag active" onClick={()=> router.push(`/blog?page=${index+1}`)}>{/* {console.log(index+1)} */}{index+1}</button> : 
                <button className="btn btn-pag" onClick={()=> router.push(`/blog?page=${index+1}`)}>{/* {console.log(index+1)} */}{index+1}</button> 
              }   
            ))}

            
            <button className="btn btn-pag" onClick={()=> router.push(`/blog?page=${page+1}`) }
            disabled={page >= lastPage}>&raquo;
            </button>   
          </div>
          <br/><br/>
          
          

          <style global jsx>{`
          .blog {
            position: relative;
            padding: 30px;
            margin-bottom: 40px;
            background: #fff;
          }
          .title1{
            color: #385985;
              font-weight: bold;
              font-size: 2.25rem;
              line-height: 1.5em;
              padding-bottom: 20px;
          }
          .btn btn-pag{
            color: black;
          }
          .col{
            
            padding-left: 2.5px;
            padding-right: 2.5px;
            
          }
          .pagination {
            display: inline-block;
          }
          
          .pagination button {
            color: black;
            float: left;
            padding: 8px 16px;
            text-decoration: none;
          }
          
          .pagination button.active {
            background-color: #2f5b96;
            color: white;
            border-radius: 5px;
          }
          
          .pagination button:hover:not(.active) {
            background-color: #2f5b96;
            border-radius: 5px;
          }
        `}</style>
        {/* conatiner-xl */}
        </div>
      </section>
      <Collaborate />
    </div>
  );
}

export async function getServerSideProps({query: {page =1} }){
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1 )* 4;
  // const start = 0;

  const nbreOfPostsResponse = await fetch(`${API_URL}/posts/count`);
  const nbreOfPosts = await nbreOfPostsResponse.json();

  const res= await fetch(`${API_URL}/posts?_limit=4&_start=${start}`);
  const data = await res.json();


  return{
    props: {
      posts: data,
      page: +page,
      nbreOfPosts
    }
  }
}
