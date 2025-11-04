import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Register attempt:", { nama, email, password });
    };

    const isLoginPage = location.pathname === "/login";

  return (
    <section className="register" id="register">
      {/* Background terpisah agar tidak ikut repaint */}
      <div className="register-bg">
        <img src="../src/image/REGISTER.png" alt="Background" />
      </div>
      <div className="register-container">
        {/* Kiri: Form register */}
        <div className="register-image" data-aos="fade-left">
          <img src="../src/image/sidester.png" alt="Login Illustration" />
        </div>

        {/* Kanan: Gambar orang / elemen visual */}
        <div className="register-content" data-aos="fade-right">
          <div className="register-header">
            <h1>REGISTER</h1>
          </div>

          <div className="register-form">
            <div className="input-wrapper">
              <input
                type="nama"
                className="input-field"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

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

            <button className="register-button" onClick={handleSubmit}>
              Register
            </button>
          </div>

          <div className="register-link">
            Sudah punya akun?{" "}
            <a
              style={{ cursor: "pointer" }}
              onClick={() => navigate(isLoginPage ? "/" : "/login")}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
