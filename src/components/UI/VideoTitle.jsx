import PropTypes from 'prop-types';
import MoreInfo from '@/components/icons/MoreInfo';
import Play from '@/components/icons/Play';
import { useSelector } from 'react-redux';
import lang from '@/utils/i18n';

const VideoTitle = ({ title, overview }) => {
    const selectedLang = useSelector((store) => store.config.lang);
    return (
        <div className='w-full absolute inset-0 flex flex-col justify-end text-white bg-gradient-to-t from-black via-transparent to-transparent p-12 pb-66'>
            <div>
                <h1 className='text-xl md:text-4xl lg:text-5xl font-bold'>{title}</h1>
                <div className='w-full lg:w-5/12 grid gap-4 mt-4'>
                    <p className='text-xs lg:text-sm'>{overview}</p>
                    <div className='flex gap-4'>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <Play />
                            <div className="w-2"></div>
                            <span className='text-xs lg:text-sm'>{lang[selectedLang].play}</span>
                        </button>

                        <button className='bg-gray-600 hover:bg-gray-700 font-bold py-2 px-4 rounded inline-flex items-center text-white'>
                            <MoreInfo />
                            <div className="w-2"></div>
                            <span className='text-xs lg:text-sm'>{lang[selectedLang].moreInfo}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

VideoTitle.propTypes = {
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
};

export default VideoTitle