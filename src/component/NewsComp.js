import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const NewsComp=(props)=>{

   const [Page, setPage] = useState(1);
   const [articles, setarticles] = useState([]);
   const [loading, setloading] = useState(true);
   const [totalResults, settotalResults] = useState(0);

  //  document.title=`NewsMonkey-${capitalizeFirstLetter(props.category)}`

  const capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 
  const updated=async ()=>{
    props.setProgress(10);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=143a70bace8e49959425dfdc1f5a48fa&page=${Page}&pagesize=${props.pagesize}`;
      setloading(true);
      props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(60);
    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);
    props.setProgress(100);
  }
   
  useEffect(() => {
    updated();
  }, [])
  
  // https://newsapi.org/v2/top-headlines?country=us&apiKey=143a70bace8e49959425dfdc1f5a48fa
  const fetchMoreData =async () => {
    setPage(Page+1);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=143a70bace8e49959425dfdc1f5a48fa&page=${Page}&pagesize=${props.pagesize}`;
      setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };
  
    return (
      <>
        <h1 style={{ color: "brown",margin:"35px 0px" }} className="text-center">NewsMonkey-Top {capitalizeFirstLetter(props.category)} HeadLines</h1>
        {loading && <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={loading && <Spinner/>}
        >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                 
                 <NewsItem
                    Title={element.title ? element.title : ""}
                    newsurl={element.url}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage} author={element.author} date={element.publishedAt}
                   source={element.source.name}/></div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
       
        </>
    );
  }


NewsComp.defaultProps={
  country:"in",
  pagesize:5,
  category:'general',
}
NewsComp.propTypes={
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string,
}
export default NewsComp;
