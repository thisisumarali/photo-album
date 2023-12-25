import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ModeToggle } from "./ui/ModeToggle"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {
    return (
        <div className="flex-col md:flex">
            <div className="border-b">
                <div className="flex h-16 items-center px-4">

                    <h1 className='text-3xl font-bold tracking-tight'>FotoFolio</h1>
                    <div className="ml-auto flex items-center space-x-4">
                        <div className="block lg:hidden">
                            <MobileNavbar />
                        </div>
                        <ModeToggle />
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar