import {useAudio} from 'react-use';
import styles from './Reproductor.module.css'

const Reproductor = ({source, name, album}) => {
    const [audio, state, controls] = useAudio({
        src: source,
        autoPlay: true,
    })

    return (
        <div className={styles.reproductor}>
            {audio}
            <h2>{name} - {album}</h2>
            <sction className={styles.barSong}>
                <progress className={styles.progress} value={state.time} max="29" >{state.time}</progress>
            </sction>
            <div className={styles.sound}>
                {state.volume > 0.5
                    && <i class="fas fa-volume-up"></i>
                }
                {(state.volume > 0 && state.volume <= 0.5)
                    && <i class="fas fa-volume-down"></i>
                }
                {state.volume === 0
                    && <i class="fas fa-volume-mute"></i>
                }
                <input
                    className={styles.barSound}
                    type="range"
                    min="0"
                    max="1"
                    value={state.volume}
                    onChange={e => controls.volume(Number(e.target.value))}
                    step="0.05"
                />
                <div
                    className={styles.play}
                    onClick={state.paused
                        ? controls.play
                        : controls.pause}>{state.paused
                            ? <i class="fas fa-play"></i>
                            : <i class="fas fa-pause"></i>}
                </div>
            </div>
        </div>
    )
}

export default Reproductor
