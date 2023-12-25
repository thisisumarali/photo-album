import cloudinary from 'cloudinary'
import Folderlist from './folderlist';

export interface foldertype {
    name: string;
    path: string;
}

const Page = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: foldertype[];
    }

    return (
        <div>
            <div className='py-4 px-5'>
                <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
                    Albums
                </h2>
            </div>
            <div className="px-5 py-4 grid grid-cols-3 gap-4">
                {folders.map((item, i) => {
                    return (
                        <div key={i}>
                            <Folderlist folders={item} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Page