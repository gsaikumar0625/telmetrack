import React from 'react';
import HomeBanner from '../../../src/assests/home_banner_2.jpg'
const Heading = ({ heading, links }) => {

    return (
        <div>
            <div className='w-full h-96 flex justify-center relative inset-0 bg-cover bg-center bg-no-repeat bg-fixed'
             style={{backgroundImage: `url(${HomeBanner})`}}>
                 <div className="absolute inset-0 bg-black opacity-50"></div> 
                <div className="h-64 mx-auto flex flex-col justify-end relative z-[1]">
                    <h1 className='text-white mb-3 font-extrabold   animate__animated animate__fadeInUp' style={{ fontSize: 60 }}>
                        {heading}
                    </h1>
                    <div className='text-center animate__animated animate__fadeInDown'>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.url} className="text-[1.1rem] font-medium 
                    text-white">{link.text}</a>
                                {index !== links.length - 1 &&
                                    <i className="far fa-circle text-white px-2"></i>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='w-full h-96 flex justify-center' style={{ backgroundImage: `url(${HomeBanner})`, 
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'center',
             backgroundAttachment: 'fixed' }}>
                <div className="h-80 mx-auto flex flex-col justify-end">
                    <h1 className='text-primaryColor mb-3 font-extrabold' style={{ fontSize: 60 }}>
                        {heading}
                    </h1>

                    <div className='text-center'>
                        {links.map((link, index) => (
                            <React.Fragment key={index}>
                                <a href={link.url} className="text-[1.1rem] font-medium 
                                text-primaryColor hover:text-secondaryColor">{link.text}</a>
                                {index !== links.length - 1 &&
                                    <i className="far fa-circle text-white px-2"></i>}
                            </React.Fragment>
                        ))}
                    </div>


                </div>
            </div> */}
        </div>
    );
}

export default Heading;