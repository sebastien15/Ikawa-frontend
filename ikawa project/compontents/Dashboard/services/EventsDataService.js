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

const eventData = {
    "name":"Tourist event",
    "details": "Venue:Kanombe",
    "date": "2022-12-31"
}

export const addEvent = async (data) => {
  try {
    const response = await fetch('https://ikawa-backend.onrender.com/api/v1/events/', {
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

export const deleteEvent = id => {
  fetch(`https://ikawa-backend.onrender.com/api/v1/events/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
  })
  .then(res => res.json())
  .then(data => {
    setEvents(events.filter(event => event.id !== id));
  });
};

export const updateEvent = event => {
  fetch(`https://ikawa-backend.onrender.com/api/v1/events/${event.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      body: JSON.stringify(event)
    })
    .then(res => res.json())
    .then(data => {
      setEvents(
        events.map(existingEvent =>
          existingEvent.id === event.id ? event : existingEvent
        )
      );
    });
};