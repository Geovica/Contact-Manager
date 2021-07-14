import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name:"", email:"" });
        this.props.history.push("/");
        console.log(this.props);
    };
    render() {
        return (
            <div>
                <h2 className="block text-gray-700 text-l  font-bold mb-2 pl-4">Add Contact</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.add}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value })}/>
                    </div>
                    <div className="mb-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;