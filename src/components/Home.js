import React from 'react';
import Image from '../utils/Image';

const Home = () => {
    return (
        <div className="section">
            <div className="content">
                {/* Use a relative path from the public folder */}
                {/* <Image src="/images/person01.png" className="person-img" alt="My Image" /> */}
                <div className="person-img"></div>
                <div className="preson-info">
                    <h1 className='name'>VAN LAR RUAT<span>（Van Van）</span></h1>
                    <p className="work">AI Engineer</p>
                    <p className="work">LLM Engineer</p>
                    <p className="info">Over 3 years of experience</p>
                    <div className="contact-info">
                        <p>Email: <a href="mailto:maruaty97@gmail.com">maruaty97@gmail.com</a></p>
                        <p>Contact Number: <a href="tel:+959251956127">(+95) 9251956127</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
