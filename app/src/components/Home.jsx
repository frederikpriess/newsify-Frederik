import Category from "./Category";

function Home() {
    const categories = ['health', 'sports', 'travel']
    const visibleCategories = categories.filter((category) => localStorage.getItem(category) !== 'off')

    return (
        <main className="home">
            {visibleCategories.map((category) => (
                <Category key={category} name={category} />
            ))}
        </main>
    )
}

export default Home