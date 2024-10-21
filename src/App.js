import CardDetails from './component/CardDetails';
import Navbarcomp from './component/Navbar';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

function App() {
  const data = [
    {title : 'title 1', description : 'desceiption 1', img : img1 },
    {title : 'title 2', description : 'desceiption 2', img : img2},
    {title : 'title 3', description : 'desceiption 3', img : img3},
    {title : 'title 4', description : 'desceiption 4', img : img4},
    
  ]
  return (
    <div>
     <Navbarcomp />

{
  data.map((item, index) => {
    return(
      <CardDetails key={index} title= {item.title} description={item.description} img={item.img}/>
    )
  })
}
     
     
    </div>
  );
}

export default App;
