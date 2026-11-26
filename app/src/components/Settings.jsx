import CategorySwitch from "./CategorySwitch"

function Settings() {
    const categories = ['health', 'sports', 'travel']

    return (
    <main className="settings">
        <h2>Settings</h2>
        <h3 className="settings__subtitle">Categories</h3>

        {categories.map((category) =>(
            <CategorySwitch key={category} name={category} />
        ))}
    </main>

)
}

export default Settings