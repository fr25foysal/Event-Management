import PropTypes from 'prop-types';
const SectionTitle = ({text}) => {
    return (
        <div className="max-w-md mb-10 mx-auto text-center">
            <h1 className="text-4xl font-bold">{text}</h1>
              <div className="divider mx-auto w-1/4 mt-0"></div>
        </div>
    );
};
SectionTitle.propTypes = {
    text: PropTypes.text
}
export default SectionTitle;