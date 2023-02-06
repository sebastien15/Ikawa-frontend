import React, {useState, useEffect} from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';
import {addEvent} from '../services/EventsDataService';

export default function AddNewEvent() {
  const [event, setEvent] = useState(null);
  const [name, setName] = useState(null);
  const [date, setDate] = useState(null);
  const [details, setDetails] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {

      const data = await addEvent({
        name,
        date,
        details
      })

      console.log({
        name,
        date,
        details
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className='w-100p'>
      {name}
      <div className='row gutter-md'>
        
        <Input
          type='text'
          label='Name of the event'
          name='eventName'
          id='eventName'
          isRequired={true}
          placeholder='Ex: Coffee event'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type='date'
          label='Date of the event'
          name='date'
          id='date'
          isRequired={true}
          placeholder='Ex: 07/09/2021'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setDate(e.target.value)}
        />

        <FileUploader
          label='Upload picture'
          name='file'
          id='file'
          isRequired={false}
          size='col-12 col-md-6'
          maxFiles='1'
          accepted='image/*'
        />

        <Input
          type='text'
          label='Event details'
          name='details'
          id='details'
          isRequired={true}
          placeholder='About the event'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setDetails(e.target.value)}
        />

        <Button
          offset='offset-md-3'
          label='Post event'
          size='col-12 col-md-6'
          marginTop='20'
          type='submit'
        />
      </div>
    </form>
  );
}
