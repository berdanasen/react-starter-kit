import { useSite } from "./context"

export default function SwitchLanguage() {

    const {language, dispatch } = useSite()

    const switchLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE'
        })
    }

    return (
        <>
        Mevcut dil = {language} <br />
        <button onClick={switchLanguage}>Dili Değiştir</button>
        </>
    )
}