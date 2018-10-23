import Link from 'next/link';

const linkStyle = {
    marginRight: 15,
}

const Header = () => (
    <div>
        {/* link api是客户端导航 不会重新请求服务器 */}
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header