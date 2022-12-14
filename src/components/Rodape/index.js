import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/designer/image/fb.png" alt="facebook imagem" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/designer/image/tw.png" alt="twiter imagem" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/designer/image/ig.png" alt="instagram imagem" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/designer/image/logo.png" alt="logo imagen" />
        </section>
        <section>
            <p>
              Criado por Anthoni Mathias.
            </p>
        </section>
    </footer>)
}

export default Rodape