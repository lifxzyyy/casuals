import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <section className="login" id="login">
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <h1>LOGIN</h1>
            <a href="#" className="forgot-link">
              Lupa kata sandi anda?
            </a>
          </div>

          <div className="login-form">
            <div className="input-wrapper">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper2">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="login-button" onClick={handleSubmit}>
              Login
            </button>
          </div>

          <div className="register-link">
            Belum punya akun? <a href="#">Daftar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
