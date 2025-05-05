import React, { useState } from "react";
import axios from "axios";

function App() {
  const [senha, setSenha] = useState("");
  const [resposta, setResposta] = useState(null);

  const verificarSenha = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/verificar_senha/", {
        params: { senha },
      });
      setResposta(res.data);
    } catch (erro) {
      console.error("Erro ao verificar senha:", erro);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>🔐 Verificador de Senhas Vazadas</h2>
      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
        style={{ padding: "0.5rem", width: "250px", marginRight: "1rem" }}
      />
      <button onClick={verificarSenha} style={{ padding: "0.5rem 1rem" }}>
        Verificar
      </button>

      {resposta && (
        <div style={{ marginTop: "1rem" }}>
          {resposta.vazada ? (
            <p style={{ color: "red" }}>
              ⚠️ Senha vazada! Encontrada {resposta.vezes} vezes.
            </p>
          ) : (
            <p style={{ color: "green" }}>✅ Senha segura!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
