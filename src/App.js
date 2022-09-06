import { useEffect, useState } from "react";
import Bids from "./components/Bids";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import ProductLanding from "./components/ProductLanding";


function App() {

  const [data, setData] = useState(null);
  useEffect(() => {
      const fun = async () => {
        let res = await fetch('https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/');
        let dt = await res.json()
        setData(dt)
    }
    fun();
  }, [])
  
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center">
      {data && <Navbar imgUrl = {data?.nav_bar?.person_icon} />}
      {data && <MainSection heading = {data?.heading} />}
      {data && <ProductLanding mainProduct = {data?.main_product} />}
      {data && <Bids bids={data?.bids} />}
    </div>
  );
}
export default App;