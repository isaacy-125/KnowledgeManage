// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';

// 通过传入不同的href 可以跳转到相同的post页面 带有不同的查询参数
// as是用于装饰url 具体router还是根据href跳转
const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="hello-nextjs" title="Hello Next.js" />
            <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
        </ul>
    </Layout>
)