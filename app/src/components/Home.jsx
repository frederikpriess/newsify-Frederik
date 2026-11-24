import Category from "./Category";

function Home() {
    const categories = ['health', 'sport', 'travel']

    return (
        <main className="home">
            {categories.map((category) => (
                <Category key={category} name={category} />
            ))}
        </main>
    )
}

export default Home