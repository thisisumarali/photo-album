import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { foldertype } from './page'
import Link from 'next/link'

const Folderlist = ({ folders }: { folders: foldertype }) => {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{folders.name}</CardTitle>
                <CardDescription>Please click on view now button to see pictures present in{" "}
                    {folders.name}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-end">
                <Link href={`/album/${folders.name}`}>
                    <Button>View Album</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Folderlist