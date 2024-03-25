import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
// import Markdown from 'react-markdown'
// import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData()
    const {cover_image,title,tags,body_html} = blog
    return (
        <div>
              <div className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 ">
		   <div className=" border-2 p-2 border-opacity-30 ">
		   <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
           <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            {
                tags.map(tag => <a key={tag}   rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline text-gray-900">#{tag}</a>)
            }	
		</div> 
        </div>
        </div>
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold ">{title}</h3>
            {/* <Markdown rehypePlugins={rehypeRaw}> {body_html}</Markdown> */}
           
        </div>
        </div>
    );
};

export default Content;