import Masterpieces1 from "../../../assets/Masterpieces1.png";
import Masterpieces2 from "../../../assets/Masterpieces2.png";
import Masterpieces3 from "../../../assets/Masterpieces3.png";
import Title from "../../../components/Title/Title";
function SectionThree() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <Title
        title={"Hand-Selected Masterpieces"}
        hs={"mt-[180px]"}
        ds={"mb-[39px]"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <div id="item1" className="overflow-hidden rounded-2xl ">
            <img
              alt=""
              src={Masterpieces1}
              className="w-full h-[250px] sm:h-[280px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p>Palm Hills Office No.3</p>
        </div>
        <div className="flex flex-col">
          <div id="item2" className="overflow-hidden rounded-2xl">
            <img
              alt=""
              src={Masterpieces2}
              className="w-full h-[250px] sm:h-[280px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p>Hacienda Duplex No.4</p>
        </div>
        <div className="flex flex-col">
          <div id="item3" className="overflow-hidden rounded-2xl">
            <img
              alt=""
              src={Masterpieces3}
              className="w-full h-[250px] sm:h-[280px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p>Sawary Family Villa </p>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
