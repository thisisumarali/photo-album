"use client"
import { CldImage } from 'next-cloudinary';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";
import { AddTags } from './action';
import { useState } from "react"
import Link from 'next/link';
import Albumdialog from './albumdialog';
const View = ({ src, tag }: { src: string, tag: string[] }) => {
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
            {/* heart icon for fav */}
            <div className='absolute top-1 right-1'
                onClick={() => {
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
            {/* edit icon for editing page */}
            <div className='absolute top-1 left-1'>
                <Link href={`/edit?publicId=${src}`}>
                    <RiImageEditFill
                        className="w-8 h-8 cursor-pointer hover:text-red-500 duration-300"
                    />
                </Link>
            </div>

            {/* add to album */}
            <div className='absolute bottom-1 left-1'>
               <Albumdialog
               imageData={src}
               />
            </div>
        </div>
    )
}

export default View