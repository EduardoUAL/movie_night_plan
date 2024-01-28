import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConection";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      console.log("Login efectuado com sucesso!");
      toast.success("Login efectuado com sucesso!");

      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error.message);
      // Adicione feedback visual para o usuário, se necessário.
      toast.error(`Erro no login: ${error.message}`);
    }
  }

  return (
    <div className="container">
      <h1>Movie Night Plan</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Escreva o seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha:</label>
        <input
          type="password"
          placeholder="Escreva a sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button>Entrar</button>
      </form>
      <p>
        Ainda não tens uma conta? <Link to="/cadastro">Resgista-te aqui</Link>
      </p>
    </div>
  );
}

export default Login;
