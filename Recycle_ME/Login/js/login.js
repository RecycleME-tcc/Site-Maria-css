
        const container = document.getElementById("container");
        const textoPainel = document.getElementById("textoPainel");
        const botaoOverlay = document.getElementById("botaoOverlay");

        function mudarParaLogin() {
            container.classList.add("move");
            textoPainel.innerText = "Seja bem-vindo de volta!";
            botaoOverlay.innerText = "Cadastrar";
            botaoOverlay.setAttribute("onclick", "mudarParaCadastro()");
        }

        function mudarParaCadastro() {
            container.classList.remove("move");
            textoPainel.innerText = "Seja bem-vindo!";
            botaoOverlay.innerText = "Entrar";
            botaoOverlay.setAttribute("onclick", "mudarParaLogin()");
        }
    