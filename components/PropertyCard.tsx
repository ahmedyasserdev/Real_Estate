import Image from "next/image";

type PropertyCardProps = {
  property: {
    image: string;
    title: string;
    price: string;
    bedroom: number;
    width: number;
    garage: number;
    author: string;
  };
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    image,
    title,
    price,
    bedroom,
    width,
    garage,
    author,
  } = property;

  return (
    <article className="card">
      <div className="flex items-center gap-5">
        <div className="self-start">
          <Image src={image} alt={title} width={158} height={200} className="object-cover" />
        </div>

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[20px] md:text-[28px] font-bold text-dark">{title}</h3>

          <div className="card_items_wrapper my-3">
            <h6 className="card_item">{bedroom} Bedroom</h6>
            <h6 className="card_item">{width}M</h6>
            <h6 className="card_item">{garage} Garage</h6>
          </div>

          <div className="card_items_wrapper">
            <p className="card_item">{author}</p>
            <p className="price_btn">${price}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
