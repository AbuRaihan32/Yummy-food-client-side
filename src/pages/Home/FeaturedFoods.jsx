import FeaturedCard from "./FeaturedCard";


const FeaturedFoods = () => {

    const info = [1,2,3,3,4,6,7,8,9]
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-7">Featured Foods</h1>
            <p className="px-5 md:mx-32">Discover Our Featured Favorites! Indulge in our curated selection of mouthwatering dishes, carefully chosen to tantalize your taste buds.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-start">
                {
                    info.map(data => <FeaturedCard
                        key={data._id}
                        info={data}
                    ></FeaturedCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedFoods;