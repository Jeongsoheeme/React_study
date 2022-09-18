import { useEffect, useState } from 'react';
import './app.css';

function App() {
  //videos는 변수에 데이터저장, setVideos는 비디오를 업데이트 선언하여 useState을 호출, []는 텅텅 비어진 비디오의 목록 
  const [videos, setVideos] = useState([]);

  //콜백을 등록할수있는게 useEffect, 컴포넌트가 업데이트될때마다 호출된다. [] 안에 원하는 데이터를 쓰고 해당 데이터가 업데이트될때마다 호출할수도 있다.
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      edirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBfueRoIlFnEYiXuSl24Lrt6_NNpVMQSKg",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return <h1>hellp</h1>;
}

export default App;
