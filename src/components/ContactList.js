import React from 'react';

const flexy = {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    height: "70%",
}

const inputStyle = {
    marginBottom: "1.5em",
    backgroundColor: "#6FCF9766",
    border: "none",
    borderRadius: "10px",
    padding: "4%"
}



class Contact extends React.Component {
    render() {
        return <section style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <h1 style={{ fontSize: "2.5em", marginBottom: "0" }}>Contact</h1>
                <p style={{ width: "70%" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <form style={flexy}>
                        <input style={inputStyle} type="text" placeholder="Name"></input>
                        <input style={inputStyle} type="text" placeholder="Email"></input>
                        <input style={inputStyle} type="text" placeholder="Phone"></input>
                        <textarea style={inputStyle} type="text" rows={6} placeholder="Message"></textarea>
                        <button type="submit" className="buttStyle" style={{ width: "12em" }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section >;
    }
}

export default Contact;