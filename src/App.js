import {useState, useEffect} from 'react';
import people from'./data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa'
function App() {
  const [item, setItem] =useState(people);
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const lastIndex = item.length -1;
     
    
    if(index <0){
      setIndex(lastIndex);
    }
    if(index> lastIndex){
      setIndex(0);
    }
  },[index, item])
  useEffect(()=>{
     
    const slider = setInterval(()=>{
      setIndex(index+1);
      
},3000);
      return () => clearInterval(slider);
  }, [index])
  return ( 
    <section>
      <div className='title'>
      <h2> / <span> Review </span> </h2>
      </div>
      <div className = 'section-center'>
      {

       item.map((person, personIndex)=> {
          const {id, name, image, title, quote} = person;
          let position = 'nextSlide';
          if(personIndex === index){
            position = 'activeSlide'
          }
          if(personIndex === index -1 || (index === 0 && personIndex === item.length-1)){
            position = 'lastSlide'
          }
          return <article className={position} key = {id}>
          <img src= {image} alt = {name} className='person-img' />
          <h4> {name} </h4>
          <p className='title'> {title} </p>
          <p className='text'> {quote} </p> 
          <p className='icon'> <FaQuoteRight/></p>
          </article>
        })
      }
      <div>
        <button className='next' onClick = {() => setIndex(index+1)} ><FiChevronRight/>  </button>
        </div>
        <div>
        <button className='prev' onClick = {() => setIndex(index-1)} ><FiChevronLeft/>  </button>
        </div>
      </div>

    </section>

    )

}
export default App;
