import Cards from "./Cards"
export default function ShowAllPage() {

    const cards = [
        {
            id: 1,
            title: "Framework Laptop",
            price: "$999.99",
            image: "https://static.frame.work/vnhapdfuirbckad88ctfkwlb0hjg",
            isAvailable: true

        },
        {
            id: 2,
            title: "Framework Laptop",
            price: "$50.99",
            image: "https://static.frame.work/fzas83nnokn5217ml32noztdtpta",
            isAvailable: false
        },
        {
            id: 3,
            title: "Framework Laptop",
            price: "$45.99",
            image: "https://static.frame.work/yw64dst6sqdf46t5qjohh9p27oyc",
            isAvailable: true


        },
        {
            id: 4,
            title: "Framework Laptop",
            price: "$67.99",
            image: "https://static.frame.work/lww17r689wvgl74tji9p9w6xtp50",
            isAvailable: true
        },
        {
            id: 5,
            title: "Framework Laptop",
            price: "$999.99",
            image: "https://static.frame.work/yq8c8hpvd0n35yt9jyg1fc4q9ofc",
            isAvailable: true

        },
        {
            id: 6,
            title: "Framework Laptop",
            price: "$999.99",
            image: "https://static.frame.work/c9ftu5g39poco3ppwvgn672sn3yr",
            isAvailable: true

        },
        {
            id: 7,
            title: "Framework Laptop",
            price: "$24.99",
            image: "https://static.frame.work/o9xsvt9opp79nd0m8nn56z5dnucg",
            isAvailable: true

        },
        {
            id: 8,
            title: "Framework Laptop",
            price: "$90.99",
            image: "https://static.frame.work/3jf3b3ccon7bx7h0qdhfmbmoz1q5",
            isAvailable: true
        },
        {
            id: 9,
            title: "Framework Laptop",
            price: "$999.99",
            image: "https://static.frame.work/o9xsvt9opp79nd0m8nn56z5dnucg",
            isAvailable: true
        },
        {
            id: 10,
            title: "Framework Laptop",
            price: "$87.99",
            image: "https://static.frame.work/o9xsvt9opp79nd0m8nn56z5dnucg",
            isAvailable: false
        }
    ]
    return (
        <div className="container-content">
            {/* Side Navigation */}
            <section>
                <div class="menu show position-static">
                    <span class="menu-text">Categories</span>
                    <a class="menu-item" href="#">Action</a>
                    <a class="menu-item" href="#">Another action</a>
                    <a class="menu-item" href="#">Something else here</a>
                </div>
            </section>

            {/* Content */}
            <section className="d-flex flex-wrap gap-3 justify-content-flex-start">
                {
                    cards.map((card) => (
                        <Cards
                            key={card.id}
                            title={card.title}
                            price={card.price}
                            image={card.image}
                            isAvailable={card.isAvailable}
                        />
                    ))
                }
            </section>
        </div>
    )
}
