import React, {useState} from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

export default function AddNewReport() {
  const [name, setName] = useState(null);
  const [source, setSource] = useState(null);
  const [summary, setSummary] = useState(null);
  const [link, setLink] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      console.log({
        name,
        source,
        summary,
        link
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
          label='Report name'
          name='rName'
          id='rName'
          isRequired={true}
          placeholder='Ex: Rwandan coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type='text'
          label='Report source'
          name='rSource'
          id='rSource'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setSource(e.target.value)}
        />

        <Input
          type='text'
          label='Report summary'
          name='rSummary'
          id='rSummary'
          isRequired={true}
          placeholder='Ex: Add summary'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setSummary(e.target.value)}
        />

        <Input
          type='text'
          label='Report link'
          name='rLink'
          id='rLink'
          isRequired={true}
          placeholder='Ex: Add Link'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setLink(e.target.value)}
        />

        <Button
          offset='offset-md-3'
          label='Upload report'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
