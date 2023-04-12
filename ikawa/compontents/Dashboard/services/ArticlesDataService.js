import axios from 'axios';

export const getAllArticles = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    };
    const response = await axios.get("https://ikawa-backend.onrender.com/api/v1/articles/", config);
    setArticles(response.data.articles);
    console.log(response.data.articles);
  } catch (error) {
    console.error(error);
  }
};


export const addArticle = async (data) => {
  try {
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: data
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle = async (id) => {

  try {

    const response = await fetch(`https://ikawa-backend.onrender.com/api/v1/articles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
  
};

export const updateArticle = article => {
  fetch(`https://ikawa-backend.onrender.com/api/v1/articles/${article.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      body: JSON.stringify(article)
    })
    .then(res => res.json())
    .then(data => {
      return data
    });
};