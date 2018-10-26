// import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
// fetch api模块
import fetch from 'isomorphic-unfetch';

// 通过传入不同的href 可以跳转到相同的post页面 带有不同的查询参数
// as是用于装饰url 具体router还是根据href跳转
const Index = (props) => (
    // <li>
    //     <Link as={`/p/${props.title}`} href={`/post?title=${props.title}`}>
    //         <a>{props.title}</a>
    //     </Link>
    // </li>
    <Layout>
        <h1>Batman Tv Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
        {/* 此种写法只会应用在单个组件 并且不会应用在组件内部的子组件 */}
        <style jsx>{`
            h1, a {
                font-family: 'Arial';
            }
            ul {
                padding: 0;
            }
            li {
                list-style: none;
                margin: 5px 0;
            }
            a {
                text-decoration: none;
                color: blue;
            }
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </Layout>
)

// 这里通过 getInitialProps方法 给index组件注入props
Index.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    // 这里的console会出现在服务端控制台 因为是通过服务端渲染的
    console.log(`Show data fetched. Count: ${data.length}`)
    return {
        shows: data,
    }
}

// export default () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//             <PostLink title="Hello Next.js" />
//             <PostLink title="Learn Next.js is awesome" />
//             <PostLink title="Deploy apps with Zeit" />
//         </ul>
//     </Layout>
// )
export default Index;