import Search from "./Search"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./Home"
import Reproductor from "./Reproductor"
import styles from "./App.module.css"
//import { useLocalStorage } from "react-use"

const initialState = JSON.parse(localStorage.getItem("favorites") || "[]")

const App = () => {
    const [favoriteSongs, setFavoriteSongs] = useState(initialState)
    const [currentSong, setCurrentSong] = useState(null)
    const [list, setList] = useState([])
    //const [favoriteSongs, setFavoriteSongs] = useLocalStorage('favorites', [])
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favoriteSongs))
    }, [favoriteSongs])

    return (
        <Router>
            <main className={styles.rout}>
                <section className={styles.link}>
                    <Link className={styles.linki} to="/">
                        <i class="fas fa-home"></i>
                    </Link>
                    <Link className={styles.linki} to="/search">
                        <i class="fas fa-search"></i>
                    </Link>
                </section>
                <Switch>
                    <Route exact path="/">
                        <Home
                            favoriteSongs={favoriteSongs}
                            currentSong={currentSong}
                            setCurrentSong={setCurrentSong}
                            setFavoriteSongs={setFavoriteSongs}
                        />
                    </Route>
                    <Route path="/search">
                        <Search
                            favoriteSongs={favoriteSongs}
                            setFavoriteSongs={setFavoriteSongs}
                            setCurrentSong={setCurrentSong}
                            list={list}
                            setList={setList}
                        />
                    </Route>
                </Switch>
            </main>
            {currentSong && (
                <Reproductor
                    source={currentSong.previewURL}
                    name={currentSong.name}
                    album={currentSong.albumName}
                />
            )}
        </Router>
    )
}

export default App
