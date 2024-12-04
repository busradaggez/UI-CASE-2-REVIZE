'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";

const Team = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="mt-48 mb-48 container">
            <div className="text-center mb-12">
                <h2 className="text-h4 font-h2 leading-h4 text-color4 mb-4">OUR CREATIVE TEAM</h2>
                <p className="text-color3 text-h7 font-h7 max-w-2xl mx-auto leading-h7 mb-24">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                {users.slice(0, 3).map((user: any) => (
                    <div
                        key={user.id}
                        className="p-6 border rounded-xl shadow-md text-center transition w-[370px] h-[580px]"
                    >
                        <div className="w-[198px] h-[198px] mx-auto mb-4 mt-2 rounded-full overflow-hidden border-4 border-color2">
                            <img
                                src={user.image}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="w-full h-full object-cover border"
                            />
                        </div>
                        <h2 className="text-h5 font-h2 mt-24 uppercase text-color4">{user.firstName} {user.lastName}</h2>
                        <p className="text-h6 text-color3 uppercase font-h5">{user.company.title}</p>
                        <p className=" text-color3 text-h7 font-h7 leading-h7 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
                        <div className="flex justify-center items-center gap-8 mt-8">
                            <Link href='https://www.facebook.com/'><FaFacebookF className=" text-color1 text-xl" /></Link>
                            <div>|</div>
                            <Link href='https://www.instagram.com/'><AiFillInstagram className="text-xl" /></Link>
                            <div>|</div>
                            <Link href='https://x.com/'><FaTwitter className="text-xl" /></Link>
                            <div>|</div>
                            <Link href='https://www.youtube.com/'><AiFillYoutube className="text-xl" /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;

