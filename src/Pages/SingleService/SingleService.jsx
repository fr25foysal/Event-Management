import { useLoaderData, useParams } from "react-router-dom";

const SingleService = () => {
    const {id} = useParams()
    const allServices = useLoaderData()
    const service = allServices.find(service=> service.id === Number(id))
    const {imageUrl, name, price,shortDescription,detailDescription} = service
    return (
        <div className="bg-slate-100 py-20">
            <div className="max-w-7xl mx-auto ">
                <div className="flex ">
                    <div className="w-1/2">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="w-1/2 text-white text-center grid content-center bg-gray-700">
                        <div className="max-w-sm mx-auto content-center ">
                            <h1 className="font-bold text-5xl uppercase">{name}</h1>
                        <p className="py-4 font-semibold text-2xl text-cyan-500">{price}</p>
                        <p className="text-lg">{shortDescription}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-300 p-20">
                <p className="text-lg">{detailDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;