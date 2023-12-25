"use client"
import { CldImage } from 'next-cloudinary';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AddTags } from '../gallery/action';
import { useState } from "react"
const View = ({ src, tag, fun }: { src: string, tag: string[], fun: any }) => {
    const [fav, setfav] = useState(tag.includes("favourite"))
    return (
        <div className='relative'>
            <CldImage
                className='rounded-sm'
                width="400"
                height="400"
                src={src}
                sizes="100vw"
                alt="Description of my image"
            />
            <div className='absolute top-1 right-1'
                onClick={() => {
                    fun(src)
                    setfav(!fav);
                    AddTags(src, fav)
                }}
            >
                {
                    fav ? <FaHeart
                        className="w-8 h-8 cursor-pointer text-red-500" /> : <CiHeart
                        className="w-8 h-8 cursor-pointer hover:text-red-500 duration-300"
                    />
                }


            </div>
        </div>
    )
}

export default View