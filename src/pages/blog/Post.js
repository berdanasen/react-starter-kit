import { useParams } from "react-router-dom"

export default function Post() {

    const { url, id } = useParams()

    return (
        <div>
            Post page = {url} - {id}
        </div>
    )
}