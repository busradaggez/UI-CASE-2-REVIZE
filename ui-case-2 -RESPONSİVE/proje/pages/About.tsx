import React from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className='bg-white about-app-container px-2 sm:px-8'>
            {/* Başlık ve Açıklama */}
            <div className="text-center mt-16">
                <h2 className="text-h4 font-h5 text-color4 mb-8">ABOUT OUR APP</h2>
                <p className="text-color3 text-h7 font-h7 max-w-2xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>

            {/* İçerik */}
            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20 items-start">

                {/* Telefon Görseli */}
                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/phone2.png"
                        alt="Phone2"
                        width={386}
                        height={526}
                        className="w-[200px] sm:w-[300px] lg:w-[386px]"
                    />
                </div>

                {/* Özellikler */}
                <div className="space-y-12">
                    {/* Özellik 1 */}
                    <div className="border border-color6 shadow-lg p-6 rounded-lg">
                        <div className="flex items-center mb-2">
                            <IoCheckmarkCircle className="text-checkBox mr-4 text-color1" />
                            <div className="text-h6 font-h5 text-color4">CREATIVE DESIGN</div>
                        </div>
                        <div className="text-color3 mt-2 text-h7 font-h7 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>
                    </div>

                    {/* Özellik 2 */}
                    <div className="border border-color6 shadow-lg p-6 rounded-lg">
                        <div className="flex items-center mb-2">
                            <IoCheckmarkCircle className="text-checkBox mr-4 text-color1" />
                            <div className="text-h6 font-h5 text-color4">EASY TO USE</div>
                        </div>
                        <div className="text-color3 mt-2 text-h7 font-h7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>
                    </div>

                    {/* Özellik 3 */}
                    <div className="border border-color6 shadow-lg p-6 rounded-lg ">
                        <div className="flex items-center mb-2">
                            <IoCheckmarkCircle className="text-checkBox mr-4 text-color1" />
                            <div className="text-h6 font-h5 text-color4">BEST USER EXPERIENCE</div>
                        </div>
                        <div className="text-color3 mt-2 text-h7 font-h7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
