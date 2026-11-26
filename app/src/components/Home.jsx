import Category from "./Category";
import categories from "../data/categories";

function Home() {
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