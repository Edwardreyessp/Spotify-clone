import { useState } from "react"
import Song from "./Song"
import styles from "./Home.module.css"

const Home = ({favoriteSongs, setFavoriteSongs, setCurrentSong}) => {
    const [click, setClick] = useState(false)

    return (
        <main className={styles.home}>
            <h1 className={styles.title}>Favorite Songs</h1>
            <section className={styles.songHome}>
                {favoriteSongs.length > 0 
                    ? favoriteSongs.map((song, index) => 
                        <Song
                            key={index}
                            favoriteSongs={favoriteSongs}
                            setFavoriteSongs={setFavoriteSongs}
                            song={song}
                            setCurrentSong={setCurrentSong}
                            click={click}
                            setClick={setClick}
                        />)
                    : <h3>
                        Busca tus canciones favoritas y agrégalas :3
                    </h3>
                }
            </section>
        </main>
    )
}

export default Home
