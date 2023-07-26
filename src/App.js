import './App.css';
import Card from './Components/Card'
import Cards from './Components/Cards'
import Filter from './Components/Filter'
import Navbar from './Components/Navbar';
import { apiUrl, filterdata } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spiner from './Components/Spiner'; 

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category ,setCategory] = useState(filterdata[0].tittle)
  async function fetchData(){
    setLoading(true);
    try{
      console.log("hiiii")
      let response = await fetch(apiUrl);
      let output = await response.json();
      console.log("byeee")
      setCourses(output.data)
      console.log(output.data)
    }
    catch(error){
      toast.error("Something Went Wrong...");
    }
    setLoading(false)
  }
   useEffect(() =>{
    fetchData();
   }, [])
  return (
    <div className="App min-h-screen flex flex-col">
      <div>
        <Navbar/>       
      </div>

      <div className='bg-black'>
        <div>
          <Filter filterdata={filterdata} category={category} setCategory={setCategory}/>
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh] '>
          {
            loading ? (<Spiner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
