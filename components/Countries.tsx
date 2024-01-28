import { countries } from "@/constants";
import Image from "next/image";

const Countries = () => {
  return (
    <section className="section__padding">
      <div className="container">
        <h2 className="bold-38 text-dark flex-center text-center">
          We are available in many <br />
          well-known countries
        </h2>

        <div className="flex-center md:flex-between flex-wrap mt-10">
          {countries.map(({ title, image }, i) => (
            <div key={i} className={`relative country`}>
              <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="object-cover"
              />
              <h6 className="text-center tracking-[4.8px] uppercase absolute left-1/2 translate-x-[-50%] top-[20px] text-dark bold-24 z-10">{title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
