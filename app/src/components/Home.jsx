import Category from "./Category";

function Home() {
    const categories = ['health', 'sports', 'travel']

    return (
        <main className="home">
            {categories.map((category) => (
                <Category key={category} name={category} />
            ))}
        </main>
    )
}

export default Home