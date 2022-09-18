import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  //videos는 변수에 데이터저장, setVideos는 비디오를 업데이트 선언하여 useState을 호출, []는 텅텅 비어진 비디오의 목록 
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyBfueRoIlFnEYiXuSl24Lrt6_NNpVMQSKg`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
    .then(items => setVideos(items))
    .catch(error => console.log('error', error));
  };
  //콜백을 등록할수있는게 useEffect, 컴포넌트가 업데이트될때마다 호출된다. [] 안에 원하는 데이터를 쓰고 해당 데이터가 업데이트될때마다 호출할수도 있다.
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      edirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyBfueRoIlFnEYiXuSl24Lrt6_NNpVMQSKg",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />;
    </div>
  )

}

export default App;
