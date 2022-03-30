import portfolioItems from "../data/portfolio.json";

const PortfolioGrid = () => {
    
    return (
        <section className="bg-primary">
            <div className="container p-3">
                <div className="row g-3">
                    {portfolioItems.map(({ id, title, url, image, description }) => (
                        <div className="col-lg-6" key={id}>
                            <div className="card h-100">
                                <img src={image} className="card-img-top" alt={`A sample image of the ${title} project`} />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                                <div className="card-footer text-end">
                                    <a href={url} target="_blank" className="btn btn-primary">View the Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default PortfolioGrid;