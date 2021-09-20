import React from 'react';
import { Link } from 'react-router-dom';

const home = {
    backgroundImage: 'url(/img/bild.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    marginTop: "-20vh",
    height: '50vh',
    width: '100vw',
    zIndex: "-99"
}
const homeText = {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    height: '50vh'
}


class Home extends React.Component {
    render() {
        return <section style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={home}></div>
            <div style={homeText}>
                <div style={{ width: '30%' }}>
                    <h1 style={{ margin: '0' }}>Welcome to my simple Blog</h1>
                    <Link to="/blog"><button style={{ fontSize: '0.3em' }} className='buttStyle'>Go to Articles</button></Link>
                </div>
            </div>
        </section>;
    }
}

export default Home;