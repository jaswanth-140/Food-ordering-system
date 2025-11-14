interface CategoryCircleProps {
  name: string;
  image: string;
}

const CategoryCircle = ({ name, image }: CategoryCircleProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

export default CategoryCircle;
