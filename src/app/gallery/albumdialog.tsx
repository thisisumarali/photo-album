"use client"
import { MdAddToPhotos } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { Foldercreate } from "./action";

const Albumdialog = ({ imageData }: { imageData: string }) => {
    const [album, setAlbum] = useState("")
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="p-0 m-0">
                    <MdAddToPhotos className="w-8 h-8 cursor-pointer hover:text-red-500 duration-300" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add To Album</DialogTitle>
                    <DialogDescription>
                        Enter the album name for the picture which you want to add in album. Click Add to Album when your done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="album-name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="album-name"
                            value={album}
                            onChange={(e: any) =>
                                (setAlbum(e.target.value))
                            }
                            placeholder="Album Name Here..."
                            className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit"
                        onClick={async () => {
                            setOpen(false);
                            await Foldercreate(album, imageData)
                        }}>
                        Add to Album
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Albumdialog