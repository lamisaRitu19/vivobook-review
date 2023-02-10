import React from 'react';
import img from '../asus.jpg';

const Home = () => {
    return (
        <div className='px-32'>
            <section className='grid grid-cols-2 gap-4 mb-32'>
                <div className='mt-16 mr-8'>
                    <h1 className='text-6xl font-bold text-orange-600 mb-6'>ASUS Vivobook 15</h1>
                    <h1 className='text-7xl font-semibold mb-6'>Your best laptop</h1>
                    <p className='text-justify mb-4'>
                        Whether at work or play, ASUS VivoBook 15 is the compact laptop that immerses you in whatever you set out to do. Its new frameless four-sided NanoEdge display boasts an ultraslim 5.7mm bezel, giving an amazing 88% screen-to-body ratio for supremely immersive visuals. The new ErgoLift hinge design also tilts the keyboard up for more comfortable typing. VivoBook 15 is powered by up to the latest Intel® Core™ i7 processor with discrete NVIDIA® graphics and dual storage drives to help you get things done with the least amount of fuss. What's more, it's available in four unique finishes to suit your style.
                    </p>
                    <button className='bg-orange-600 text-white text-lg font-bold rounded-lg  hover:bg-orange-500 px-6 py-4'>View Details</button>
                </div>
                <div className=''>
                    <img src={img} className='w-full mt-1' alt="" />
                </div>
            </section>
            <section>
                <h1>reviews</h1>

            </section>
        </div>
    );
};

export default Home;