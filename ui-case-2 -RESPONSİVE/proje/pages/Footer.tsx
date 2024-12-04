import React from "react";
import { IoMdMail, IoMdSend } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa6";

const FooterPage = () => {
    return (
        <div className="relative">
            {/* Üst Bilgi Kutusu */}
            <div className="absolute -top-28 w-full flex justify-center items-center px-4">
                <div
                    className="bg-white w-[1170px] h-[230px] rounded-3xl px-8 py-8 flex flex-col gap-8 sm:flex-row justify-between items-center shadow-custom"
                    style={{
                        boxShadow:
                            "0 20px 80px rgba(0, 0, 0, 0.1), 0 -20px 80px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full">
                        {/* Mail Bölümü */}
                        <div className="flex items-center gap-4 text-left">
                            <div className="bg-color1 text-white p-4 rounded-full w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
                                <IoMdMail className="text-2xl sm:text-3xl" />
                            </div>
                            <div className="text-color4 text-footer font-h5 leading-h5">
                                info@youremail.com
                            </div>
                        </div>

                        {/* Dikey Çizgi */}
                        <div className="hidden sm:block w-[2px] h-[70px] sm:h-[100px] bg-color3"></div>

                        {/* Telefon Bölümü */}
                        <div className="flex items-center gap-4 text-right">
                            <div className="bg-color1 text-white p-4 rounded-full w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
                                <FaPhoneAlt className="text-2xl sm:text-3xl" />
                            </div>
                            <div className="text-color4 text-footer font-h5 leading-h5">
                                +880 321 655 9985
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bölümü */}
            <div className="bg-color5 w-full h-auto text-white flex flex-col px-4 sm:px-8  mt-10">
                <div className="flex flex-col lg:flex-row justify-start lg:gap-36  container ">
                    {/* Logo ve Sosyal Medya */}
                    <div className="mt-48 ">
                        <h1 className="font-h5 text-h5 leading-h5">LOGO</h1>
                        <p className="mt-4 max-w-xs text-h7 font-h7 leading-h7 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <a href="https://www.facebook.com/">
                                <FaFacebookF className="text-color2 text-xl" />
                            </a>
                            <div>|</div>
                            <a href="https://www.instagram.com/">
                                <AiFillInstagram className="text-xl" />
                            </a>
                            <div>|</div>
                            <a href="https://x.com/">
                                <FaTwitter className="text-xl" />
                            </a>
                            <div>|</div>
                            <a href="https://www.youtube.com/">
                                <AiFillYoutube className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Hızlı Linkler */}
                    <div className="mt-16 sm:mt-48">
                        <h1 className="font-h5 text-h5 leading-h5">QUICK LINK</h1>
                        <p className="mb-1.5 mt-4 text-h7 font-h7 leading-h7">About</p>
                        <p className="mb-1.5 text-h7 font-h7 leading-h7">Features</p>
                        <p className="mb-1.5 text-h7 font-h7 leading-h7">Screenshot</p>
                        <p className="text-h7 font-h7 leading-h7">Blog</p>
                    </div>

                    {/* Abonelik Formu */}
                    <div className="mt-16 sm:mt-48">
                        <h1 className="font-semibold text-2xl sm:text-[31.25px]">NEWS LETTER</h1>
                        <p className="mb-1.5 mt-4 max-w-xs text-h7 font-h7 leading-h7">
                            Subscribe our newsletter to get our latest update & news
                        </p>
                        <div className="relative mt-8 w-full max-w-sm text-h7 font-h7 leading-h7">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 rounded-md text-color3 focus:outline-none"
                            />
                            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-color1 text-color6 px-3 py-2 rounded-md hover:bg-color2 flex items-center">
                                <IoMdSend />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Bölümü */}
                <div className="border-t border-color6 mt-8 mb-8 flex justify-center items-center  pt-4 text-center container ">
                    <FaRegCopyright className="text-color6 text-h7" />
                    <span className="text-color6 text-h7 font-h7 leading-h7">
                        Copyright 2021 .Ojjomedia. All Right Reserved.
                    </span>
                </div>
            </div>
        </div>

    );
};

export default FooterPage;
