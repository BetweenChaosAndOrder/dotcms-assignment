import React, { useState } from 'react';
import Carousel from './Carousel/Carousel';
import BlogDetail from './BlogDetail';

const BlogListing = ({ blog }: any) => {
    let images: any = []
    blog.BlogCollection.forEach((element: any) => {
        console.log('https://' + element.contentHost.hostName + element.image.idPath)
        images.push({
        img: <img className="h-full w-full object-cover" src={'https://' + element.contentHost.hostName + element.image.idPath} alt="teste" />,
        blog: element
        })
    });

    const [selectedBlog, setSelectedBlog] = useState<number | undefined>();
    
    if (selectedBlog === undefined) {
        return (
            <div className="h-screen w-screen overflow-hidden">
                <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                    <div className="mb-10 flex flex-col  justify-center space-y-6">
                        <h1 className="text-4xl font-bold md:text-5xl">TRAVEL BLOG</h1>
                        <p className="text-center w-3/5 text-xs opacity-75 m-auto">
                        Get inspired to experience the world. Our writers will give you their first-hand stories and 
                        recommendations that will inspire, excite you, and help you make the best desition s for planning your next adventure.
                        </p>
                    </div>
                    <Carousel items={images} />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <BlogDetail post={blog.BlogCollection[0]} />
            </div>
        )
    }
}

export default BlogListing