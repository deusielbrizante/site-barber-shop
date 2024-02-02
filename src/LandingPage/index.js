import './style.css'
import { useState } from 'react'

export default function Component() {

    const [Darktheme, setDarkTheme] = useState(false)

    const changeTheme = () => {
        setDarkTheme(!Darktheme)
    }

    return (
        <div className={Darktheme ? 'dark-mode' : 'light-mode'}>
            <header className="max-width">
                <img className={Darktheme ? 'img-filter' : 'none'} src="assets/barbearia-logo.png" />
                <button onClick={changeTheme} className={Darktheme ? 'dark-mode' : 'light-mode'}>
                    <img src={!Darktheme ? "assets/moon.png" : "assets/sun.png"} />
                    {!Darktheme ? "Dark" : "Light"}
                </button>
            </header>
            <main>
                <section className="banner" />
                <section className="max-width">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    <p>S. Kelly</p>
                </section>
            </main>
        </div>
    )
}