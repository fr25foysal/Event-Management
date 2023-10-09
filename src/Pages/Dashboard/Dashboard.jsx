import HomeServiceCard from "../../Components/HomeServiceCard/HomeServiceCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
      <div>
        <div className="bg-slate-100">
          <div className="max-w-7xl mx-auto grid py-16 px-5 content-center">
            
              <div>
                <SectionTitle text={"My Services"}></SectionTitle>
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {services.slice(0,6).map((service) => (
                  <HomeServiceCard
                    service={service}
                    key={service.id}
                  ></HomeServiceCard>
                ))}
              </div>
            
          </div>
        </div>

        <div className="w-full grid h-screen content-center">
          <h2 className="font-bold text-7xl  text-center">Comming Soon...</h2>
        </div>
      </div>
    );
};

export default Dashboard;