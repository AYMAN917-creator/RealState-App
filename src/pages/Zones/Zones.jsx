import Hero from "../../components/Hero Section/Hero";
import mainzone from "../../assets/mainzone.png";
import api from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Zones() {
    const navigate = useNavigate();
    const [zones, setZones] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let isActive = true;

        api.get("/zone")
            .then((response) => {
                if (isActive) setZones(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                if (isActive) setLoading(false);
            });

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <div>
            <Hero
                bg={mainzone}
                title="Destinations Defined by Distinction"
                desc="From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."
                icons={true}
            />
            <section className="mx-15 my-21.75 grid grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                    zones.map((zone) => (
                        <img
                            key={zone.id}
                            src={zone.images}
                            className="h-55 w-82.5 cursor-pointer transition-transform duration-300 hover:scale-105"
                            onClick={() => navigate(`/zones/${zone.id}`)}
                        />
                    ))
                )}
            </section>
        </div>
    );
}

export default Zones;