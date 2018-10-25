import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';
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