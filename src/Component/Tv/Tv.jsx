import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import MediaItem from '../MediaItem/MediaItem';

export default function Home() {
  const [trendingTv, setTrendingTv] = useState([]);
 async function getTrending(mediaType,callback)
  {
let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?&api_key=b44e5bbfa6921b60c1a1e3941df29c03`) 
callback(data.results) ;
console.log(data.results); 
}
  useEffect(()=>{
    getTrending('tv',setTrendingTv);
  },[]);
    return <>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Tv</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  

<div className='row py-5'>
  <div className="col-md-4 d-flex align-items-center">
    <div>
    <div className="brdr w-25 mb-3"></div>
    <h2 className='h4'>Trending Tv <br/> To Watch Right Now</h2>
    <p className='py-2 text-muted'>Most Watched Movies To Watch Right Now </p>
    <div className="brdr w-100 mt-3"></div>
    </div>
    
  </div> 

  {trendingTv.map((item ,index)=><MediaItem key={index} item={item}/>)}
</div>
</>
  
}