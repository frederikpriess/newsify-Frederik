import CategorySwitch from "./CategorySwitch"
import categories from "../data/categories"

function Settings() {

    function toggleTheme() {
        document.body.classList.toggle('dark')

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
    }

    return (
    <main className="settings">
        <h2>Settings</h2>
        <h3 className="settings__subtitle">Categories</h3>

        {categories.map((category) =>(
            <CategorySwitch key={category} name={category} />
        ))}
        <button className="settings__theme" onClick={toggleTheme}>
            Toggle dark mode
        </button>
    </main>

)
}

export default Settings