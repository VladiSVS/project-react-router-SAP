import React from 'react';
import { Link } from 'react-router-dom';

const flexy = {
    display: "flex",
    flexDirection: "column",
}

class BlogItems extends React.Component {
    render() {
        return <article style={flexy}>
            <div style={{ width: "100%", height: "60%" }}>
                <img src={this.props.img_url} style={{ borderRadius: "1em", width: "100%", height: "30vh", objectFit: "cover" }} alt=""></img>
            </div>
            <h1>{this.props.title}</h1>
            <Link to={`/blog/${this.props.id}`}><button className="buttStyle">Read More</button></Link>
        </article >;
    }
}

export default BlogItems;