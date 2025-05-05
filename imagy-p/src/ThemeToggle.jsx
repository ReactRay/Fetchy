import { useGlobalContext } from "./Context"


function ThemeToggle() {

    const { greeting } = useGlobalContext()
    return (
        <div>
            <h2>{greeting}</h2>
        </div>
    )
}

export default ThemeToggle
