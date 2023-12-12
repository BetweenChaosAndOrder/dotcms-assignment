import React from 'react';

const BlogDetail = ({ post }: any) => {
    const hostName: string = 'https://' + post.contentHost.hostName
    return (
        <article className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img 
                  src={hostName + post.image.idPath} 
                  alt="" 
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.postingDate} className="text-gray-500">
                    {post.postingDate}
                  </time>
                  <a
                    href=''
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.tags[0]}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.urlMap}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.teaser}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={hostName + post.author[0].titleImage.idPath} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href=''>
                        <span className="absolute inset-0" />
                        {post.author[0].firstName} {post.author[0].lastName}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
            </article>
    )
}

export default BlogDetail