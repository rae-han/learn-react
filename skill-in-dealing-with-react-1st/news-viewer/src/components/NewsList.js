import React, { useEffect, useState } from 'react';
import axios from '../../node_modules/axios/index';
// import axios from 'axios'

import usePromise from '../lib/usePromise'

import NewsItem from './NewsItem'

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);

  //     try {
  //       let query = category === 'all' ? '' : `&category=${category}`

  //       let config = {
  //         method: 'get',
  //         url: `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d0504ad1721e4ce1aeb550102a388565`
  //       }
  //       const response = await axios(config);

  //       setArticles(response.data.articles)
  //     } catch (error) {
  //       console.log(error)
  //     }

  //     setLoading(false)
  //   };

  //   fetchData();
  // }, [category])

  const [loading, response, error] = usePromise(() => {
    let query = category === 'all' ? '' : `&category=${category}`

    let config = {
      method: 'get',
      url: `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d0504ad1721e4ce1aeb550102a388565`
    }

    return axios(config)
  }, [category])

  if(loading) {
    return <div>대기중...</div>
  }

  if(!response) {
    return null;
  }

  if(error) {
    return <div>에러발생!</div>
  }

  const { articles } = response.data;
  return (
    <div>
      {articles.map(article => <NewsItem key={article.url} article={article} />)}
    </div>
  );
};

export default NewsList;