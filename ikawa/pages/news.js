/* eslint-disable @next/next/no-img-element */
import React ,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Wrapper from '../compontents/Layouts/Wrapper';
import Contents from '../compontents/Layouts/Contents';


export default function News() {
  const router = useRouter();
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);
  return (
    <Wrapper isNavTransparent={true}>
      <Contents>
        <div className='pt--50 mobile '>
          {articles && articles.map((post, i) => (
            <div key={i} className='pb--30 post-item'>
              <div className='post-image'>
                <div className='post-grid-img-holder'>
                  <img
                    onClick={() => router.push(post.articleUrl)}
                    src={post.picture}
                    className='w-100p pointer'
                    alt=''
                  />
                </div>
              </div>
              <div>
                <h4
                  onClick={() => router.push(post.articleUrl)}
                  className='post-grid-head pt--0 pointer'>
                  {post.title}
                </h4>
                <span className='post-grid-subhead font-weight-medium fs--14 d-block mb--10'>
                  {post.author}
                </span>
                <p>{post.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current state of the Rwandan coffee */}
      </Contents>
    </Wrapper>
  );
}
