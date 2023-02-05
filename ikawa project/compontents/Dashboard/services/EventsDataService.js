export const getAllEvents = async () => {
  try {
    
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/events/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const userData = await response.json();

    return userData;

  } catch (error) {
    console.error(error);
  }

};
