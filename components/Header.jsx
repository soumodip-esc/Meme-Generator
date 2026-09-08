import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
           <img src={trollFace} alt="Troll Face" />
           <h2>Meme Generator</h2>

        </header>
    )
}