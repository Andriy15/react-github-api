import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

export function FavouritePage() {
  const favourites = useAppSelector((state) => state.github.favourites);

  const { removeFavourite } = useActions();

  if (favourites.length === 0) return <p className="text-center">No items</p>;

  return (
     <div className="flex justify-center h-screen pt-10 mx-auto w-screen">
       <ul className="list-none h-screen w-auto">
         {favourites.map(({ id, url }) => (
            <li
               key={id}
               className="border rounded py-2 px-4 mb-2 hover:shadow-md hover:bg-gray-100 transition-all cursor-pointer flex flex-col"
            >
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
              <button
                 className="py-2 px-4 mt-2 bg-red-400 rounded hover:shadow-md transition-all"
                 onClick={() => removeFavourite({id, url})}
              >
                Remove
              </button>
            </li>
         ))}
       </ul>
     </div>
  );
}
