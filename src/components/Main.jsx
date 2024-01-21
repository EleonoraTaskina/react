import { blogData } from "../constants/BlogData"
import { BlogPost } from "./BlogPost"

export const Main = () => {
    return (
        <main>
            <h1 style={{textAlign: 'center',marginBottom: '40px'}}>
                My blog
            </h1>
            <div className="blog-list">
                {
                    blogData.map(blogPost => {
                        return (
                            <BlogPost
                                key={blogPost.title}
                                title={blogPost.title}
                                subTitle={blogPost.subTitle}
                                img={blogPost.img}
                                text={blogPost.text}
                                button={blogPost.button}
                            />
                        )
                    })
                }
            </div>
        </main>    
    )
}