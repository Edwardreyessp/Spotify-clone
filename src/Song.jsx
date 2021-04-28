import styles from "./Search.module.css"

const Song = ({song, setCurrentSong = () => {}, favoriteSongs, setFavoriteSongs}) => {
    const addToFavoriteSongs = () => {
        const exist = favoriteSongs.includes(song)
        song.isStreamable = false
        if(!exist) setFavoriteSongs([...favoriteSongs, song])
    }

    const removeFavoriteSong = (id) => {
        const newSongs = favoriteSongs.filter(songi => songi.id !== id)
        setFavoriteSongs(newSongs)
        song.isStreamable = true
    }

    return (
        <div className={styles.song}>
            <h3>{song.name} - {song.albumName}</h3>
            <i class="fas fa-play" onClick={() => setCurrentSong(song)}></i>
            {song.isStreamable
                ? <i class="far fa-heart"
                    onClick={addToFavoriteSongs}>
                </i>
                : <i class="fas fa-heart"
                    onClick={() => removeFavoriteSong(song.id)}>
                </i>
            }
        </div>
    )
}

export default Song
