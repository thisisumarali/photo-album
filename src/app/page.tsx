"use client"
import Image from 'next/image'
import { CldUploadButton, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface UploadImage {
  event: "success"
  info: {
    public_id: string
  }
}

export default function Home() {
  //use state to change image
  const [imageId, setImageId] = useState('cld-sample-4')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}
