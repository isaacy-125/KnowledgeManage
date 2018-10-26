import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';
import Markdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';

// 通过withRouter高阶函数获取url对象的props参数

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content</p>
//     </div>
// ))

const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
        <div className="markdown">
            <Markdown
                source={`
                This is our blog post.
                Yes. We can have a [link](/link).
                And we can have a title as well.
                ### This is a title
                And here's the content.
                `}
            />
        </div>
        {/* global 样式会应用全局 */}
        <style jsx global>{`
            .markdown {
                font-family: 'Arial';
            }
            .markdown a {
                text-decoration: none;
                color: blue;
            }
            .markdown a:hover {
                opacity: 0.6;
            }
            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    console.log(id);
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)    
    const show = await res.json();
    // 这里的console会出现在客户端console 因为从server中拦截了此路由通过客户端渲染
    console.log(`Fetched show: ${show.name}`)
    return { show }
}

// const Page = () => (
//     <Layout>
//         <Content></Content>
//     </Layout>
// )

export default Post;