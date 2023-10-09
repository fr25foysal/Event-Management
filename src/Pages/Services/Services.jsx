import { useLoaderData } from "react-router-dom";
import HomeServiceCard from "../../Components/HomeServiceCard/HomeServiceCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Services = () => {
    const services = useLoaderData()
    return (
      <div className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div>
            <SectionTitle text={"Our Services"}></SectionTitle>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            {services.map((service) => (
              <HomeServiceCard
                service={service}
                key={service.id}
              ></HomeServiceCard>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Services;