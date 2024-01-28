import { useState } from "react";
import { auth } from "../../firebase/firebaseConection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import "./RegistarUtilizador.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegistarUtilizador = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoDeSenha, setConfirmacaoDeSenha] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (senha !== confirmacaoDeSenha) {
      toast.error(`As senhas devem ser iguais`);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);

      await updateProfile(auth.currentUser, { displayName: nome });

      toast.success("Utilizador resgistado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.log("Utilizador não registado", error);
    }
  }

  return (
    <div className="container_registo">
      <h1>Movie Night Plan</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Escreva o seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="text"
          placeholder="Escreva o seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Senha</label>
        <input
          type="password"
          placeholder="Escreva uma senha de 6 digitos"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label>Confirmação de senha</label>
        <input
          type="password"
          placeholder="Confime a sua senha"
          value={confirmacaoDeSenha}
          onChange={(e) => setConfirmacaoDeSenha(e.target.value)}
          required
        />
        <button>registar</button>
      </form>
    </div>
  );
};

export default RegistarUtilizador;
