import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/activities')
    .then(response => {
      setActivities(response.data)
    })
}, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {activities.map((activity: any) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </List>
    </div>
    
  )
}

export default App