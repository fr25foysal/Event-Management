import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SingleStuff from "../../Components/StuffCard/SingleStuff";

const Managemants = () => {
    const [team, setTeam] = useState([])
    useEffect(()=>{
      fetch('/stuff.json')
      .then(res => res.json())
      .then(data => setTeam(data))
  },[])
    return (
        <div>
            <div className="bg-slate-100">

<div className="max-w-7xl mx-auto grid h-screen content-center">
<div className="pb-16">
  <SectionTitle text={"Management Team"}></SectionTitle>
  <div className="grid grid-cols-3">
    {team.map((member) => (
      <SingleStuff member={member} key={member.id}></SingleStuff>
    ))}
  </div>
</div>
</div>
</div>
            <div className="w-full grid h-screen content-center">
                <h2 className="font-bold text-7xl  text-center">Comming Soon...</h2>
            </div>
        </div>
    );
};

export default Managemants;