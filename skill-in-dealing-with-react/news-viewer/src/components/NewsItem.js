import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
`

const NewsItem = ({ article }) => {
  const { title, desc, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      { urlToImage && (
        <div className="thumbnail">
          <a href="{url}" target="_black" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"/>
          </a>
        </div>
      ) }

      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h2>
        <p>{desc}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;