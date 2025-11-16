import { useDispatch, useSelector } from "react-redux";
import { removeFromCollections } from "../../redux/cart/CollectionsSlice";
import type { RootState } from "../../redux/store";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/watchnotfound.png";

function Collections() {
  const items = useSelector((state: RootState) => state.collection.items);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    dispatch(removeFromCollections(index));
  };

  return (
    <section className="w-full px-6 sm:px-10 lg:px-20 py-20">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-12">Your Collection</h1>

      {items.length === 0 ? (
        <div className="relative h-80 flex items-center justify-center">
          <img
            src={img}
            className="w-72 opacity-60 object-contain select-none"
            draggable="false"
          />

          <p
            className="
      absolute text-2xl font-semibold text-gray-700 text-center
      [text-shadow:_1px_1px_3px_white]
    "
          >
            No products in your collection
          </p>
        </div>
      ) : (
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-12 
          "
        >
          {items.map((w: any, index: number) => (
            <Link
              to={`/AllWatches/${w.id}`}
              key={index}
              className="shadow-md rounded-xl p-5 relative group hover:shadow-xl transition"
            >
              {/* DELETE ICON */}
              <button
                onClick={(e) => {
                  e.preventDefault(); // stops navigation
                  e.stopPropagation(); // stops Link click
                  handleDelete(index);
                }}
                className="
                  absolute top-3 right-3 
                  text-red-500 p-2 rounded-full 
                  hover:text-red-700 transition
                "
              >
                <FaTrash size={14} />
              </button>

              {/* IMAGE */}
              <div className="w-full h-[220px] flex items-center justify-center">
                <img
                  src={w.image}
                  alt={w.name}
                  className="object-contain h-full rounded-xl hover:scale-105 duration-300"
                  loading="lazy"
                />
              </div>

              {/* DETAILS */}
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-700">
                  {w.name}
                </h3>

                {w.color && (
                  <p className="text-sm text-gray-500 mt-1">{w.color}</p>
                )}

                <p className="text-md font-bold mt-1">{w.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Collections;
