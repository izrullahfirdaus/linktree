import React from "react";
import post from '../public/post/persyaratan-umroh.jpeg'
import Image from "next/image";
const Persyaratan = () => {
    return (
        <>
            <div className="flex flex-items justify-center w-1/2 m-auto mt-5 bg-white">
                <Image src={post} alt="persyaratan-umroh" className="w-full h-full"/>
            </div>
        </>
    )
}

export default Persyaratan