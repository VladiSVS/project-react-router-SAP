import React from 'react';
import BlogItems from './BlogItems';
import blogData from '../data/data';

const grid = {
    display: 'grid',
    justifyContent: 'center',
    gridGap: "5%",
    gridTemplateColumns: "repeat(3, 20%)",
    gridTemplateRows: "repeat(3, 60%)",
}

class BlogList extends React.Component {
    state = {
        blogData: blogData,
    }

    render() {
        return <section style={grid}>
            {this.state.blogData.map((elt) =>
                <BlogItems
                    img_url={elt.img_url}
                    title={elt.title}
                    key={elt.id}
                    id={elt.id}
                // newTit={elt.title.split(' ').join('')}
                />
            )}
        </section>;
    }
}

export default BlogList;