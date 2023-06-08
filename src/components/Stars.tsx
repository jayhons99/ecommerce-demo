import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface StarsProps {
  stars: number;
  reviews: number;
}

const Stars: React.FC<StarsProps> = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;
    return (
      <span key={i} className="text-amber-400 text-base mr-1">
        {stars >= i + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center mb-2">
      <div className="flex">{tempStars}</div>
      <p>({reviews} customer reviews)</p>
    </div>
  );
};
export default Stars;
