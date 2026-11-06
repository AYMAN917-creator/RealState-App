import Hero from "../../components/Hero Section/Hero";
import dev from "../../assets/dev.png";
import api from "../utils/api";
import { useEffect, useState } from "react";
import FutureCards from "../../components/Cards/FutureCards";
import CardLogo1 from "../../assets/CardLogo1.svg";
import DetailsBtn from "../../components/Buttons/DetailsBtn";
import { useNavigate } from "react-router-dom";

function Developers() {
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const getDevelopers = async () => {
            try {
                const response = await api.get("/developer");
                if (isMounted) setDevelopers(response.data ?? []);
            } catch (err) {
                console.error(err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        getDevelopers();
        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (developers.length === 0) {
        return <h1>Developer Not Found</h1>;
    }

    return (
        <div>
            <Hero
                bg={dev}
                title="Defining the Future Skyline."
                desc="Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."
                icons={true}
            />
            <section className="grid grid-cols-1 gap-5 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 px-20">
                {developers.map((developer) => (
                    <div key={developer.id}>
                        <FutureCards
                            id={developer.id}
                            imgSrc={developer.images}
                            logo={CardLogo1}
                            btn={
                                <DetailsBtn
                                    onClick={() => navigate(`/developers/${developer.id}`)}
                                />
                            }
                        />
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Developers;