import { BsGrid, BsList } from "react-icons/bs";
import { useFilterContext } from "../hooks";

const Sort = () => {
  const { gridView, displayGrid, displayList } = useFilterContext();
  return (
    <div className="flex items-center text-2xl text-green-950 cursor-pointer gap-x-2">
      <BsGrid
        onClick={displayGrid}
        className="hover:scale-125 transition-transform"
      />
      <BsList
        onClick={displayList}
        className="hover:scale-125 transition-transform"
      />
    </div>
  );
};
export default Sort;
