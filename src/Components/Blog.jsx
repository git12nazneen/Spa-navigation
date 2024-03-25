import { Link, Outlet, useLoaderData} from "react-router-dom";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Blog = () => {
    const blog =  useLoaderData()
  

    const {title, comments_count, reading_time_minutes, public_reaction_count , published_at,tags} = blog

    return (
        <div>
            
             <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
	        <article className="space-y-8  text-black">
		    <div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-black">
				<div className="flex items-center md:space-x-2">
					
					<p className="text-sm">{reading_time_minutes}min read • {new Date(published_at).toLocaleDateString()}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} • {public_reaction_count} views</p>
			</div>
            <Tabs>
                <TabList>
                <Tab><Link to=''>Content</Link>  </Tab>
                <Tab><Link to={`author`}>Author</Link> </Tab>
                {/* <Tab>Title 3</Tab> */}
                </TabList>

                {/* <TabPanel>
                <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                <h2>Author</h2>
                </TabPanel> */}
            </Tabs>
		</div>
		<Outlet></Outlet>
	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            {
                tags.map(tag => <a key={tag}   rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline text-gray-900">#{tag}</a>)
            }
			
			
		</div>
	</div>
</div>
        </div>
    );
};

export default Blog;