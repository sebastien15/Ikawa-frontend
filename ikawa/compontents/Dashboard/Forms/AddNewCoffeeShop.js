import React, {useState} from 'react';
import Input from '../FormElements/Input';
import FileUploader from '../FormElements/FileUploader';
import Button from '../FormElements/Button';

export default function AddNewCoffeeShop() {
  const [shopName, setShopName] = useState(null);
  const [shopDetails, setshopDetails] = useState(null);
  const [Location, setLocation] = useState(null);
  const [Location1, setLocation1] = useState(null);
  const [contacts, setContacts] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log({
        shopName,
        shopDetails,
        Location,
        Location1,
        contacts
      })
    } catch (error) {
      console.log(error)
    }
};

  return (
    <form action='' className='w-100p' onSubmit={handleSubmit}>
      <div className='row gutter-md'>
        <Input
          type='text'
          label='Coffeeshop name'
          name='shopName'
          id='shopName'
          isRequired={true}
          placeholder='Ex: Coffee Iwacu'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setShopName(e.target.value)}
        />

        <Input
          type='text'
          label='Coffeeshop details'
          name='shopDetails'
          id='shopDetails'
          isRequired={true}
          placeholder='Ex: Coffee'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setshopDetails(e.target.value)}
        />

        <Input
          type='text'
          label='Location'
          name='shopLat'
          id='shopLat'
          isRequired={true}
          placeholder='Latitude'
          size='col-12 col-md-3'
          bgColor='bg-white'
          onChange={(e) => setLocation(e.target.value)}
        />

        <Input
          type='text'
          label='Location'
          name='shopLong'
          id='shopLong'
          isRequired={true}
          placeholder='Longitude'
          size='col-12 col-md-3'
          bgColor='bg-white'
          onChange={(e) => setLocation1(e.target.value)}
        />

        <Input
          type='text'
          label='Contacts'
          name='shopContact'
          id='shopContact'
          isRequired={true}
          placeholder='Ex: someone@example.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setContacts(e.target.value)}
        />

        <Button
          offset='offset-md-3'
          label='Post shop'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
