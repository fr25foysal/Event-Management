import { FaTwitter, FaInstagram ,FaLinkedinIn} from 'react-icons/fa';
import PropTypes from 'prop-types';

const SingleStuff = ({member}) => {
    const {name,position, image} = member
        return (
        <div>
            <div className="relative hover:-translate-y-4 transition flex lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
    <img src={image} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {name}
    </h4>
    <p className="block bg-gradient-to-tr  text-[#60C0E4] bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
     {position}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      
    >
      <FaTwitter className='block  text-[#26a7de] bg-clip-text text-2xl font-normal leading-relaxed antialiased'></FaTwitter>
    </a>
    
    <a
      
    >
      <FaInstagram className='block  text-[#405DE6]  bg-clip-text text-2xl font-normal leading-relaxed antialiased'></FaInstagram>
    </a>

    <a
      
    >
      <FaLinkedinIn className='block  text-[#0072b1] bg-clip-text text-2xl font-normal leading-relaxed antialiased'></FaLinkedinIn>
    </a>
  </div>
</div>
        </div>
    );
};
SingleStuff.propTypes = {
  member: PropTypes.object
}
export default SingleStuff;