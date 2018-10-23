import { withRouter } from 'next/router';
import Layout from '../components/MyLayout.js';

// 通过withRouter高阶函数获取url对象的props参数

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content</p>
    </div>
))

const Page = () => (
    <Layout>
        <Content></Content>
    </Layout>
)

export default Page;