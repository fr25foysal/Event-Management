
const HomeServiceCard = ({service}) => {
    const {name, imageUrl, price, shortDescription } = service
    return (
      <div>
        <div className="h-full hover:scale-105 transition-transform rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="h-64 mx-4 overflow-hidden rounded-lg bg-clip-border  ">
            <img
              src={imageUrl}
              alt="img-blur-shadow"
              className="w-full mt-4 h-full rounded-lg"
            />
          </div>
          <div className="p-6 flex items-stretch flex-col">
            
              <h5 className="mb-2 block   text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
              </h5>
              <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
                {shortDescription}
              </p>
            

            <p className=" mt-4 font-semibold grow">{price}</p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-gray-700 py-3 px-6 text-center align-middle   text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
};

export default HomeServiceCard;