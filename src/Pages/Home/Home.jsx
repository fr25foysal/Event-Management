import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import HomeServiceCard from '../../Components/HomeServiceCard/HomeServiceCard';
import { useLoaderData } from 'react-router-dom';
const Home = () => {

  const services = useLoaderData()
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                  clearTimeout(timeout)
                }
                function nextTimeout() {
                  clearTimeout(timeout)
                  if (mouseOver) return
                  timeout = setTimeout(() => {
                    slider.next()
                  }, 4000)
                }
                slider.on("created", () => {
                  slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                  })
                  slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                  })
                  nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
              },
        ]
      )

    return (
      <div>
        {/* Home Slider */}
        <div ref={sliderRef} className="keen-slider h-fit bg-slate-700">
          <div className="keen-slider__slide">
            <div className="hero min-h-screen bg-[url('./assets/images/slider1.jpg')]">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide">
            <div className="hero min-h-screen bg-[url('./assets/images/slider2.jpg')]">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide">
            <div className="hero min-h-screen bg-[url('./assets/images/slider3.jpg')] bg-bottom">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className='bg-slate-100'>
<div className="mx-auto py-10 px-4 max-w-7xl lg:px-0">
          {/* Service Section */}
          <div className="">
            <div className="max-w-md mb-10 mx-auto text-center">
              <h1 className="text-4xl font-bold">Our Services</h1>
              <div className="divider mx-auto w-1/4 mt-0"></div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
              {services.slice(0, 6).map((service) => (
                <HomeServiceCard
                  service={service}
                  key={service.id}
                ></HomeServiceCard>
              ))}
            </div>
          </div>
        </div>
</div>
        
      </div>
    );
};

export default Home;