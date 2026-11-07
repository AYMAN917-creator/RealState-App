import Future1 from "../../../assets/Future1.png";
import Future2 from "../../../assets/Future2.png";
import CardLogo1 from "../../../assets/CardLogo1.svg";
import CardLogo2 from "../../../assets/CardLogo2.svg";
import Title from "../../../components/Title/Title";
import FutureCards from "../../../components/Cards/FutureCards";

function SectionFive() {
  return (
    <section className="mb-36.25">
      <Title title={"Future Landmarks"} hs={"mt-[180px]"} ds={"mb-[38px]"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FutureCards imgSrc={Future1} logo={CardLogo1} />
        <FutureCards
          imgSrc={Future2}
          logo={CardLogo2}
          logoHeader={"Hayah City"}
          logoTitle={"Hayah Development"}
        />
        <FutureCards imgSrc={Future1} logo={CardLogo1} />
      </div>
    </section>
  );
}

export default SectionFive;
