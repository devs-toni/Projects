import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../Global';
import Article from './Article';

const Articles = () => {

  const url = Global.url;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
    console.log(articles);

  }, [articles.length]);

  const getArticles = () => {
    axios.get(url + 'articles').then(res => {
      setArticles(res.data.articles);
    });
  }

  // Eliminar el artículo
  const delArticle = (id) => {
    const idArticle = articles[id]._id;
    axios.delete(url + 'delete/' + idArticle).then(res => {
      getArticles();
    });
  }

  return (
    <div className='publicaciones'>
      <h1 className='mt-5'>Artículos</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          {
            articles.length > 0
              ? (
                articles.map((article, i) => {
                   return (<Article
                    key={i}
                    id={i}
                    articleData={article}
                    delArticle={delArticle}
                  />);
                })
              ) : (
                <h3 className='mx-auto'>No hay artículos</h3>)
          }
        </div>
      </div>
    </div>
  )
}

export default Articles