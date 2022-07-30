import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '최민정',
    'birthday' : '960623',
    'gender' : '여자',
    'job' : '개발자'
  },{
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : '010101',
    'gender' : '남자',
    'job' : '대학생'
  },{
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '박박이',
    'birthday' : '990823',
    'gender' : '남자',
    'job' : '바리스타'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (<Customer
            key ={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />);
        })
      }
    </div>
  );
}

export default App;
