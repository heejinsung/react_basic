import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Movie({title, ranking, picture}) {
  console.log(typeof ranking);
  return (
    <div>
      <h3>My Favorite Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <img src={picture} alt={title}/>
    </div>
  );
}

const arr = ['a','b','c','d'];
// arr.map(function(elm){
//   console.log(elm);
//   return 0;
// });

//화살표함수
arr.map((elm)=>{
  console.log(elm);
  return 0;
})

const myMovies =[
  {
    id:1,
    title:"shindler",
    ranking:5,
    image:'https://lh3.googleusercontent.com/proxy/ZCNYb_GcnmIMNWBTH1l02Oc8EQ-E63-bvbmDrnYeB1E6PZrSUpnzCAtFq1YxLrHwnJ23ONuEBnNOTugdtmTmhfuvvbsTAvGtLsF1h2Q0baXjM6C8Mmww3yXedMbjROSnMkmD-CShEWCdRdltPqmAegNZ-PTKYGTJrB0ZDJmoRRoYS634DyzkSw1LCYHCRc19n64YJQxB0qYdZ57tjhUYT5cLPs-2n_CrQB2kznmpM1u1fR2rzlS3i2dFyEisKKvWC6PlKHIoqPcPQoEw-qJkZdayd6dMqX7EvBtLL-wHxk70ZplhVL5jjFVFmE7TNrm2gbCc7idm4TvwWWbOCvlUUIsrGR1n38MTfVodFyPFSFQYXF5f3y2OAtJjQZty2ft-7QY'
  },
  {
    id:2,
    title:"극한직업",
    ranking:6,
    image:'https://upload.wikimedia.org/wikipedia/ko/c/cf/%EA%B7%B9%ED%95%9C%EC%A7%81%EC%97%85_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg'
  },
  {
    id:3,
    title:"신세계",
    ranking:6.7,
    image:'https://t1.daumcdn.net/cfile/tistory/999BBF375A4093EC2E'
  },
  {
    id:4,
    title:"해리포터",
    ranking:7.8,
    image:'https://cdnweb01.wikitree.co.kr/webdata/editor/202101/28/img_20210128101215_5a225c47.webp'
  },

];

function App() {
  return (
    <div className="App">
      <h2>My Movie</h2>
      {myMovies.map((movies) => (
        <Movie 
          title={movies.title} 
          ranking={movies.ranking} 
          picture={movies.image}
          key={movies.id}
        />
      ))}

    </div>
  );
}



Movie.propTypes = {
  title:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  ranking:PropTypes.number.isRequired
}

export default App; //함수에서의 return과 같음
