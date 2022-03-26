const portfolioItem = [
    {
        id: 1,
        title: "Item 1"
    },
    {
        id: 2,
        title: "Item 2"
    },
    {
        id: 3,
        title: "Item 4"
    },
    {
        id: 4,
        title: "Item6"
    },
    {
        id: 4,
        title: "Item6"
    },
    {
        id: 4,
        title: "Item6"
    },
    {
        id: 4,
        title: "Item6"
    }
];

const PortfolioGrid = () => {


    
    return (
        <section className="bg-primary">
            <div class="container p-3">
                <div className="row g-3">
                    {portfolioItem.map((item) => (
                        <div className="col-md-6" key={item.id}>
                            <div className="card card-body">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default PortfolioGrid;