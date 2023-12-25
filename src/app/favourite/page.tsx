
import cloudinary from 'cloudinary';
import Favouritelist from './favouritelist';

export interface MyImage {
    public_id: string;
    tags: string[];
}
const Page = async () => {
    let res = await cloudinary.v2.search
        .expression('resource_type:image AND tags=favourite')
        .with_field("tags")
        .sort_by('public_id', 'desc')
        .execute() as { resources: MyImage[] };

    return (
        <>
            <div className='flex items-center justify-between py-4 px-5'>
                <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
                    Favourites
                </h2>
            </div>
            <Favouritelist resources={res.resources} />
        </>
    )
}

export default Page