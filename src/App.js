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
    <div className="App">
      <div>
        <Navbar/>       
      </div>

      <div>
        <Filter filterdata={filterdata}/>
      </div>

      <div>
        {
          loading ? (<Spiner/>) : (<Cards courses={courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
