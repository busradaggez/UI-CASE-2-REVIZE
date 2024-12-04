import React from 'react';
import Image from 'next/image';
import { MdPhoneIphone } from "react-icons/md";
import { BiSolidVector } from "react-icons/bi";
import { GiWashingMachine } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { MdInsertComment } from "react-icons/md";


const AppFeaturesPage = () => {
    return (
        <div className="relative text-color6 bg-background2 bg-cover bg-center bg-no-repeat min-h-screen py-16">
            <div className="container mx-auto px-4">
                {/* Başlık ve Açıklama */}
                <div className="text-center mt-24 mb-16">
                    <h2 className="text-h4 font-h2 mb-4 leading-h4">APP FEATURES</h2>
                    <p className="text-h7 font-h7 leading-h7 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>
                </div>
                <div className="text-center mb-24">
                    <MdInsertComment className="text-4xl mb-5 mx-auto lg:ml-auto" />
                    <h3 className="text-h5 font-h5 mb-3 leading-h5">FULL FREE CHAT</h3>
                    <p className=' text-h7 font-h7 leading-h7 max-w-xs mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Ana İçerik */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Sol Özellikler */}
                    <div className="space-y-36">
                        <div className="text-right xs:text-center sm:text-center lg:text-right">
                            <GiWashingMachine className="text-4xl mb-4 inline-block" />
                            <h3 className="text-h5 font-h5 mb-2">UNLIMITED FEATURES</h3>
                            <p className="text-h7 font-h7 leading-h7 max-w-xs mx-auto lg:mr-0 lg:text-right text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="text-right xs:text-center sm:text-center lg:text-right ">
                            <BiSolidVector className="text-4xl mb-4 inline-block" />
                            <h3 className="text-h5 font-h5 mb-2">AWSOME UI DESİGN</h3>
                            <p className="text-h7 font-h7 leading-h7 max-w-xs mx-auto lg:mr-0 lg:text-right text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    {/* Orta Görsel */}
                    <div className="flex justify-center bg-none">
                        <Image
                            src="/app.png"
                            alt="App Features"
                            width={375}
                            height={812}
                            className="object-cover rounded-none"
                        />
                    </div>

                    {/* Sağ Özellikler */}
                    <div className="space-y-36">
                        <div className="sm:text-center lg:text-left xs:text-center">
                            <MdPhoneIphone className="text-4xl mb-4 inline-block" />
                            <h3 className="text-h5 font-h5 mb-2">ISO & ANDROID VERSION</h3>
                            <p className="text-h7 font-h7 leading-h7 max-w-xs mx-auto lg:ml-0 lg:text-left text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="sm:text-center lg:text-left xs:text-center">
                            <IoEyeOutline className="text-4xl mb-4 inline-block" />
                            <h3 className="text-h5 font-h5 mb-2">RETINA READY GRAPHICS</h3>
                            <p className="text-h7 font-h7 leading-h7 max-w-xs mx-auto lg:ml-0 lg:text-left text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Alt Özellik */}
                <div className=" text-center mt-16 mb-36">
                    <BsPersonCircle className="text-4xl mx-auto" />
                    <h3 className="text-h6 font-h5 mt-6">24/7 SUPPORT BY REAL PEOPLE</h3>
                    <p className="mt-4 text-h7 font-h7 leading-h7 max-w-xs mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppFeaturesPage;
