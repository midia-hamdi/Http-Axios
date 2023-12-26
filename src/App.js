import React, {useEffect} from 'react'
import { get, HttpClient } from './service/HttpClient';

const httpClient = new HttpClient();

export default function App() {

  useEffect(() => {
    httpClient.get('posts', {
      params: {
        id: 2
      }
    }).then(response => console.log(response))
  }, [])
  return (
    <div className="App">

    </div>
  );
}


