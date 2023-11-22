import { useState } from "react";

const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState("");
    const [msg, setMsg] = useState("");

    const handleClicks = (e, type) => {
        switch (type) {
            case "name":
                setErr("");
                setName(e.target.value);
                if (e.target.value === "") {
                    setErr("fullname is blank");
                }
                break;
            case "email":
                setErr("");
                setEmail(e.target.value);
                if (e.target.value === "") {
                    setErr("Email is blank");
                }
                break;
            case "pass":
                setErr("");
                setPass(e.target.value);
                if (e.target.value === "") {
                    setErr("password is blank");
                }
                break;
            default:
                break;
        }
    }


    return (
        <center>
            <div className="w3-container w3-padding w3-margin" style={{ maxWidth: '800px' }}>
                <form className="w3-center w3-padding w3-border w3-round-xlarge" >
                    <h3>Login</h3>
                    <p>
                        {
                            msg !== "" ?
                                <span className="w3-text-green">{msg}</span> :
                                <span className="w3-text-red">{err}</span>
                        }
                    </p>
                    <div className="w3-row w3-section">
                        <label className="w3-col" style={{ width: '100px' }}>Name:</label>
                        <div className="w3-rest">
                            <input type="text" className="w3-input w3-border" value={name} onChange={(e) => { handleClicks(e, "name") }} name="name" placeholder="All Names" />
                        </div>
                    </div>
                    <div className="w3-row w3-section">
                        <label className="w3-col" style={{ width: '100px' }}>Email:</label>
                        <div className="w3-rest">
                            <input type="email" className="w3-input w3-border" value={email} onChange={(e) => { handleClicks(e, "email") }} name="email" placeholder="email.." />
                        </div>
                    </div>
                    <div className="w3-row w3-section">
                        <label className="w3-col" style={{ width: '100px' }}>Password:</label>
                        <div className="w3-rest">
                            <input type="password" className="w3-input w3-border" onChange={(e) => { handleClicks(e, "pass") }} value={pass} name="passowrd" placeholder="password..." />
                        </div>
                    </div>
                    <button className="w3-button w3-margin w3-green w3-round-xlarge">Login</button>
                </form>
            </div>
        </center>
    );
}

export default SignIn;