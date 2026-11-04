function carregarHeadComum() {
    const headComum = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/src/assets/styles/style.css">
        <link rel="icon" type="image/ico" href="/public/favicon.ico">
    `;
    document.head.insertAdjacentHTML('beforeend', headComum);
}

class RpgHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="/pages/home/index.html"><img id="logo" src="/public/favicon.ico" alt="Logo"></a>
                <h1>Ferramenta de RPG Muito Foda!</h1> 
                <nav>
                    <a href="/pages/home/index.html">Início</a>
                    <a href="#">Guia</a>
                </nav>
            </header>
        `;
    }
}

customElements.define('rpg-header', RpgHeader);

carregarHeadComum();