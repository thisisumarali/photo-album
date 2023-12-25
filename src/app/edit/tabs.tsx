"use client"
import { Button } from "@/components/ui/button"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { CldImage } from "next-cloudinary"

export function TabsDemo({ src }: { src: string }) {
    return (
        <Tabs defaultValue="original" className="w-full py-5 px-4">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="original">Orignial</TabsTrigger>
                <TabsTrigger value="blur">Blur</TabsTrigger>
                <TabsTrigger value="gray">Grayscale</TabsTrigger>
                <TabsTrigger value="oil">Oil Paint</TabsTrigger>
            </TabsList>
            <TabsContent value="original">
                <div className="flex gap-7 items-center py-4 justify-center">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                </div>
            </TabsContent>
            <TabsContent value="blur">
                <div className="flex gap-7 items-center py-4 justify-center">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ blur: "800" }]}
                    />
                </div>
            </TabsContent>
            <TabsContent value="gray">
                <div className="flex gap-7 items-center py-4 justify-center">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"

                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ grayscale: true }]}
                    />
                </div>
            </TabsContent>
            <TabsContent value="oil">
                <div className="flex gap-7 items-center py-4 justify-center">
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"

                    />
                    <CldImage
                        width="250"
                        height="250"
                        src={src}
                        sizes="100vw"
                        alt="Description of my image"
                        effects={[{ oilPaint: true }]}
                    />
                </div>
            </TabsContent>


        </Tabs>
    )
}


