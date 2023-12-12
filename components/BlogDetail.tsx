import React from 'react';

const BlogDetail = ({ post }: any) => {
    const hostName: string = 'https://' + post.contentHost.hostName
    console.log(post)
    return (
        <div className="relative bg-white">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <img 
                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover" 
                            src={hostName + post.image.idPath}
                            alt="" 
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <div className='flex'>
                            <div className="mr-1 z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white">
                                {post.tags[0]}
                            </div>
                            <div className={(post.tags[1] != undefined ? "mr-1 z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white": 'hidden')}>
                                {post.tags[1]}
                            </div>
                        </div>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h1>
                        
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            {post.blogContent.json.content?.map((content: any, index: number) => {
                                if(content.type === 'paragraph' && content.content != undefined) {

                                    return <p key={index} className="mt-8">{content.content[0].text}</p>
                                }
                                if(content.type === 'heading') {
                                    return <h2 key={index} className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                        {content.content[0].text}
                                    </h2>
                                }
                                if(content.type === 'table') {
                                    return (
                                    <div className="px-4 sm:px-6 lg:px-8">
                                        <div className="mt-8 flow-root">
                                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 align-middle">
                                                <table className="min-w-full divide-y divide-gray-300">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Beach Name</th>
                                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Information</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 bg-white">
                                                        <tr>
                                                            <td className="px-3 py-4 text-sm text-gray-500">Teahupo’or</td>
                                                            <td className="px-3 py-4 text-sm text-gray-500">This legendary surf spot is known for its powerful waves and is considered one of the best places in the world to catch a perfect wave. Teahupo’o is considered a “must-do” for experienced surfers, but be sure to bring your A-game because the waves here can be quite intimidating.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-4 text-sm text-gray-500">Papara</td>
                                                            <td className="px-3 py-4 text-sm text-gray-500">Located near the town of Papeete, Papara is a great place for experienced surfers to catch some waves and enjoy the scenery. The waves here are known to be quite powerful and consistent, making it a great spot for advanced surfing.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="px-3 py-4 text-sm text-gray-500">PK-18</td>
                                                            <td className="px-3 py-4 text-sm text-gray-500">Located near the town of Papeete, PK-18 offers some of the best</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  )
                                }
                            })}

                            <div className="bg-white">
                                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-1 lg:gap-x-8">
                                        {post.blogContent.json.content?.map((content: any, index: number) => {
                                            if(content.type === 'dotContent') {
                                                return (
                                                    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                                        <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
                                                            <img 
                                                                src={hostName + content.attrs.data.image}
                                                                alt={content.attrs.data.title}
                                                                className="h-full w-full object-cover object-center sm:h-full sm:w-full" />
                                                        </div>
                                                        <div className="flex flex-1 flex-col space-y-2 p-4">
                                                            <h3 className="text-sm font-medium text-gray-900">
                                                                <a href="">
                                                                    <span aria-hidden="true" className="absolute inset-0"></span>
                                                                    {content.attrs.data.title}
                                                                </a>
                                                            </h3>
                                                            <p className="text-sm text-gray-500 truncate">{content.attrs.data.description}</p>
                                                            <div className="flex flex-1 flex-col justify-end">
                                                                <p className="text-base font-medium text-gray-900">${content.attrs.data.retailPrice}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default BlogDetail