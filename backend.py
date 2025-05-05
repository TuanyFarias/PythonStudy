from fastapi import FastAPI, Query
import hashlib
import httpx

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/verificar_senha/")
async def verificar_senha(senha: str = Query(...)):
    sha1 = hashlib.sha1(senha.encode('utf-8')).hexdigest().upper()
    prefixo = sha1[:5]
    sufixo = sha1[5:]

    url = f"https://api.pwnedpasswords.com/range/{prefixo}"

    async with httpx.AsyncClient() as client:
        resposta = await client.get(url)
        if resposta.status_code != 200:
            return {"erro": "Falha ao consultar API"}

        linhas = resposta.text.splitlines()
        for linha in linhas:
            hash_final, qtd = linha.split(':')
            if hash_final == sufixo:
                return {"vazada": True, "vezes": int(qtd)}

    return {"vazada": False}
