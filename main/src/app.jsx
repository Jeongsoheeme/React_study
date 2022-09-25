import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_Category from './components/search_category/search_category';
import SearchHeader from './components/search_header/search_header';
import StayList from './components/stay_list/stay_list';

function App() {

  let offset = 0;

  //videos는 변수에 데이터저장, setVideos는 비디오를 업데이트 선언하여 useState을 호출, []는 텅텅 비어진 비디오의 목록 
  const [stays, setStays] = useState([]);

  const search = query => {
    const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyBfueRoIlFnEYiXuSl24Lrt6_NNpVMQSKg`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item => ({...item, id: item.id.videoId})))
    .then(items => setStays(items))
    .catch(error => console.log('error', error));
  };

  const MoreStay = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&offset=${offset}&key=AIzaSyBfueRoIlFnEYiXuSl24Lrt6_NNpVMQSKg`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setStays((olditems) => [...olditems, ...result.items]))
      .catch(error => console.log('error', error));

    offset += 50;
  };


  const handleScroll = (e) => {
    // console.log("top: ",e.target.documentElement.scrollTop);
    // console.log("window: ", window.innerHeight);
    // console.log("height: ",e.target.documentElement.scrollHeight);
    if (
      window.innerHeight + e.target.documentElement.scrollTop +1 >=
      e.target.documentElement.scrollHeight
    ) {
      MoreStay();
    }
  };

  //콜백을 등록할수있는게 useEffect, 컴포넌트가 업데이트될때마다 호출된다. [] 안에 원하는 데이터를 쓰고 해당 데이터가 업데이트될때마다 호출할수도 있다.
  useEffect(()=>{

    window.addEventListener('scroll', handleScroll)

    MoreStay();
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <Search_Category/>
      <StayList stays={stays} />;
    </div>
  )

}

export default App;
