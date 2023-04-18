import React, {useState} from 'react';
import Input from '../FormElements/Input';
import Button from '../FormElements/Button';

export default function AddNewCoffeeRoaster() {
  const [roasterName, setroasterName] = useState(null);
  const [name, setName] = useState(null);
  const [address, setaddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log({
        roasterName,
        name,
        address,
        phone,
        email
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
          label='Roaster name'
          name='roName'
          id='roName'
          isRequired={true}
          placeholder='Ex: Roaster name'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setroasterName(e.target.value)}
        />

        <Input
          type='text'
          label='Owner name'
          name='oName'
          id='oName'
          isRequired={true}
          placeholder='Ex: John Doe'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type='text'
          label='Address'
          name='address'
          id='address'
          isRequired={true}
          placeholder='Ex: Kigali, Rwanda'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setaddress(e.target.value)}
        />

        <Input
          type='text'
          label='Phone'
          name='phone'
          id='phone'
          isRequired={true}
          placeholder='Ex: +250 788 263 325'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setPhone(e.target.value)}
        />

        <Input
          type='email'
          label='Email'
          name='email'
          id='email'
          isRequired={true}
          placeholder='Ex: someone@example.com'
          size='col-12 col-md-6'
          bgColor='bg-white'
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          offset='offset-md-3'
          label='Upload roaster'
          size='col-12 col-md-6'
          marginTop='20'
        />
      </div>
    </form>
  );
}
