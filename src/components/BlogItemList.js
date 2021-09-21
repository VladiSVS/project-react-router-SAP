import React from 'react';
import blogData from '../data/data';
import { Link } from 'react-router-dom';

const flexy = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

class BlogItemList extends React.Component {
    state = {
        blogData: blogData.filter(elt => elt.id === Number(this.props.match.params.id)),
    }

    render() {
        console.log(this.props.match.params.id)
        return <section style={flexy}>
            <div style={{ maxWidth: "40vw" }}>
                <Link style={{ textDecoration: 'none', textAlign: 'left', fontWeight: "bold", fontSize: "1.1em" }} to="/blog">&#171;back</Link>
                <img src={this.state.blogData[0].img_url} style={{ borderRadius: "1em", width: "100%", height: "50vh", marginTop: "1em", objectFit: "cover" }} alt=""></img>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1 style={{ fontSize: "2.5em" }}>{this.state.blogData[0].title}</h1>
                    <h1 style={{ fontSize: "1.2em" }}>{this.state.blogData[0].published_date}</h1>
                </div>
                <p>{this.state.blogData[0].description}</p>
                <h1 style={{ fontSize: "1.2em" }}>{this.state.blogData[0].author}</h1>
            </div>
        </section>;
    }
}

export default BlogItemList;