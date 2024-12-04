'use client';
import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { RiScreenshot2Line } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";

const HeroPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" min-h-[150vh] bg-no-repeat bg-cover bg-background1 font-sans xs:mb-24">
            <div className="container max-w-container pt-[36px]">
                {/* Menu Container */}
                <div className="h-menu">
                    <div className="text-h7 font-h7 flex justify-between items-center px-4 text-color6">
                        {/* Mail */}
                        <div className="gap-15 flex items-center justify-start xs:hidden sm:hidden md:flex">
                            <IoMdMail className="text-xl" />
                            <span>Info@youremail.com</span>
                        </div>
                        {/* Phone */}
                        <div className="gap-18 flex  items-center justify-start ml-47 xs:hidden sm:hidden md:flex">
                            <FaPhoneAlt className="text-xl" />
                            <span>(480) 555-0103</span>
                        </div>
                        {/* Social Media */}
                        <div className="gap-30 flex items-center xs:hidden sm:hidden md:flex">
                            <Link href="https://www.facebook.com/">
                                <FaFacebookF />
                            </Link>
                            <Link href="https://www.instagram.com/">
                                <AiFillInstagram />
                            </Link>
                            <Link href="https://x.com/">
                                <FaTwitter />
                            </Link>
                            <Link href="https://www.youtube.com/">
                                <AiFillYoutube />
                            </Link>
                        </div>
                    </div>
                    {/* Menu */}
                    <div className="mt-24 rounded-5 flex justify-center items-center xs:justify-start max-w-header max-h-header bg-color6 text-color4 fontSize-h6 fonWeight-h5 lineHeight-h6">
                        <div className="relative">
                            {/* Hamburger Menu */}
                            <div className="absolute lg:hidden text-color6 text-h6 cursor-pointer z-30">
                                <button onClick={toggleMenu}>
                                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                                </button>
                            </div>
                            <div
                                className={`fixed top-0 left-0 w-full h-full bg-color1 text-color6 p-6 z-20 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                                    }`}
                            >
                                <div className="absolute top-4 right-4 text-color6 text-2xl cursor-pointer">
                                    <AiOutlineClose onClick={toggleMenu} />
                                </div>
                                <div className="flex flex-col items-start space-y-6 mt-10">
                                    <Link href="#" className="flex items-center gap-2">
                                        <IoHomeOutline /> HOME
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <GoBook /> ABOUT
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <MdOutlineFeaturedPlayList /> FEATURES
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <RiScreenshot2Line /> SCREENSHOT
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <RiBloggerLine /> BLOG
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2">
                                        <IoCloudDownloadOutline /> DOWNLOAD
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 mt-4">
                                        <IoMdMail className="text-xl" />
                                        <span>Info@youremail.com</span>
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 mt-4">
                                        <FaPhoneAlt className="text-xl" />
                                        <span>(480) 555-0103</span>
                                    </Link>
                                    <div className="gap-30 flex items-center">
                                        <Link href="https://www.facebook.com/">
                                            <FaFacebookF />
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <AiFillInstagram />
                                        </Link>
                                        <Link href="https://x.com/">
                                            <FaTwitter />
                                        </Link>
                                        <Link href="https://www.youtube.com/">
                                            <AiFillYoutube />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div className="hidden lg:flex lg:justify-between lg:items-center w-full text-h6 font-h5">
                                <div>
                                    <Link href="#" className="text-color1 underline ml-52">
                                        HOME
                                    </Link>
                                    <Link href="#" className="ml-38">
                                        ABOUT
                                    </Link>
                                    <Link href="#" className="ml-40">
                                        FEATURES
                                    </Link>
                                </div>

                                <div className="logo-custom flex justify-center w-[200px] h-[90px] md:hidden lg:flex">
                                    <Image
                                        src="/logo.png"
                                        alt="Logo"
                                        width={167}
                                        height={28}
                                    />
                                </div>

                                <div className="flex items-center">
                                    <Link href="#" className="ml-43">
                                        SCREENSHOT
                                    </Link>
                                    <Link href="#" className="ml-40">
                                        BLOG
                                    </Link>
                                    <button className="bg-color1 text-color6 ml-43 mr-6 rounded-5 w-[158px] h-[50px]">
                                        DOWNLOAD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Slider Bölümü */}
                <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="text-center flex items-center">
                        <div className="rectangle4-container xs:mt-32">
                            <h2 className="text-color1 text-h2 font-h2 mb-4 text-center lg:text-left">
                                A GREAT APP MAKES YOUR LIFE BETTER
                            </h2>
                            <p className="text-color3 text-h7 font-h7 mb-6 text-center lg:text-left">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <h2 className="text-black text-h5 font-h5 mb-4 text-center lg:text-left">
                                DOWNLOAD APP NOW
                            </h2>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <Image
                                    src="/google-appstore.png"
                                    alt="Google Play App Store"
                                    width={314}
                                    height={47}
                                    layout="intrinsic"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="cell-phone-container">
                        <Image
                            src="/phone1.png"
                            alt="Phone1"
                            width={646}
                            height={725}
                            layout="intrinsic"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;
