import React from "react";
import Link from "next/link";

import Aboutus from "../components/about-us";
import Services from "../components/nos-services";
import Stats from "../components/statistiques";
import Temoignage from "../components/temoignage";
import Partners from "../components/partenaires";
import Posts from "../components/recentposts";
import Collab from "../components/collab-withus";
import StickySM from "../components/stickySM";



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


export default function Components({posts}) {
  return (
    <div>   
      <StickySM />
      <Aboutus />
      <Services />
      <Stats />
      <Temoignage />
      
      <Collab />

      <div className="container-xl pb-5">
        <h2 className="title-act text-center">Nos dernières actualités</h2>
        
          
        <div className="card-group row">
          {(posts.slice(0,2)).map(post => (
            <Link href={`/${post.Slug}`} key={post.id}>
              <div className="col-sm-6">
                <Posts post={post} />
              </div>            
            </Link>
          ))} 
        </div>
      </div>

      <Partners />

      <style jsx>{`
        .title-act {
          color: #385985;
          font-weight: bold;
          font-size: 2.25rem;
          line-height: 1.5em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
