import React from "react"

export default function Main() {
    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        imageUrl:""
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function handelChange(event) {
        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemeImages.length)
    const randomMeme = allMemeImages[randomIndex]
    setMeme(prevMeme => ({
        ...prevMeme,
        imageUrl: randomMeme.url
    }))
}
    
    return (
        <main>
            <div className="form">
                <label> Top Text
                    <input
                        type="text"
                        placeholder="eg... it is i show speed"
                        name="topText"
                        value={meme.topText}
                        onChange={handelChange}
                    />
                </label>

                <label> Bottom Text
                    <input
                        type="text"
                        placeholder="eg... Who is White"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handelChange}
                    />
                </label>
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}