import React, {useState} from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Textarea from '../FormElements/Textarea';
import Button from '../FormElements/Button';
import { addArticle } from '../services/ArticlesDataService';

export default function AddNewArticle() {
  const [article, setArticles] = useState(null);
  const [author, setAuthor] = useState(null);
  const [date, setData] = useState(null);
  const [content, setContent] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {

      const data = await addEvent({
        article,
        author,
        date,
        content
      })

      console.log({
        article,
        author,
        date,
        content
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <form action='' className='w-100p' onSubmit={handleSubmit}>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Title of the article'
          name='articleTitle'
          id='articleTitle'
          isRequired={true}
          placeholder='Ex: Coffee is awesome'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setArticles(e.target.value)}
        />

        <Input
          type='text'
          label='Author'
          name='author'
          id='author'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setAuthor(e.target.value)}
        />

        <Input
          type='date'
          label='Date uploaded'
          name='date'
          id='date'
          isRequired={true}
          placeholder='Ex: 07/09/2021'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setData(e.target.value)}
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
          isRequired={true}
          size='col-12 col-md-6'
          accepted='image/*'
          maxFiles='1'
        />

        <Textarea
          label='Article content'
          name='aContent'
          id='aContent'
          isRequired={true}
          placeholder='Add contents'
          size='col-12 col-md-12'
          bgColor='bg-white'
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          offset='offset-md-3'
          label='Post article'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
