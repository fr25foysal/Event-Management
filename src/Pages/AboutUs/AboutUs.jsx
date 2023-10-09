import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SingleStuff from "../../Components/StuffCard/SingleStuff";

const AboutUs = () => {
    const [team, setTeam] = useState([])
    useEffect(()=>{
      fetch('/stuff.json')
      .then(res => res.json())
      .then(data => setTeam(data))
  },[])
    return (
        <div className="bg-slate-100">

            <div className="max-w-7xl mx-auto grid h-screen content-center">
            <div className="pb-16">
              <SectionTitle text={"Key Executives"}></SectionTitle>
              <div className="grid grid-cols-3">
                {team.map((member) => (
                  <SingleStuff member={member} key={member.id}></SingleStuff>
                ))}
              </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;