import Upload from './upload'
import cloudinary from 'cloudinary'
import View from './view';

interface MyImage {
    public_id: string;
    tags: string[];
}
const Page = async () => {
    let res = await cloudinary.v2.search
        .expression('resource_type:image')
        .with_field("tags")
        .sort_by('public_id', 'desc')
        .execute() as { resources: MyImage[] };

    return (
        <>
            <div className='flex items-center justify-between py-4 px-5'>
                <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
                    Gallery
                </h2>
                <Upload />
            </div>
            <div className='lg:columns-4 columns-2 gap-4 mx-auto p-5 space-y-4'>
                {res.resources.map((item, i) => {
                    return <div key={i} className='break-inside-avoid'>
                        <View src={item.public_id} tag={item.tags} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Page