import { useAppSelector } from "@/store/hooks";
import { products_state } from "@/store/productsSlice";
import type { Product } from "@/types";
import _ from "lodash";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface Filters {
  name: string;
  brand: string;
  category: string;
  status: string;
}

const Filters = ({
  products,
  setProducts,
}: {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}) => {
  const _products = useAppSelector(products_state);
  const resetFilters = () => {
    setProducts(_products.products);
  };
  const [name, setName] = useState();
  const [filters, setFilters] = useState({} as Filters);
  const [categories, setCategories] = useState([""]);
  const [brands, setBrands] = useState([""]);
  const [statuses, setStatuses] = useState([""]);

  useEffect(() => {
    let cat: string[] = [];
    let sta: string[] = [];
    let bra: string[] = [];
    _products.products.map((p) => {
      if (!cat.includes(p.category)) {
        cat.push(p.category);
      }
      if (!sta.includes(p.availabilityStatus)) {
        sta.push(p.availabilityStatus);
      }
      if (!bra.includes(p.brand)) {
        bra.push(p.brand);
      }
    });
    cat = _.filter(cat);
    sta = _.filter(sta);
    bra = _.filter(bra);
    setCategories(cat);
    setStatuses(sta);
    setBrands(bra);
  }, [_products.products]);

  useEffect(() => {
    const filter_product = () => {
      console.log(products, filters);
      // setProducts([] as Product[]);
    };
    filter_product();
  }, [filters, products, setProducts]);
  return (
    <div
      id="filters"
      className="w-fit mx-auto grid grid-cols-1 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      <div className="m-10 w-screen max-w-screen-md">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <form className="">
              <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
                <svg
                  className="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" className=""></circle>
                  <line
                    x1="21"
                    y1="21"
                    x2="16.65"
                    y2="16.65"
                    className=""
                  ></line>
                </svg>
                <input
                  type="text"
                  name="name"
                  className="h-12 w-full cursor-text text-black rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Search by product name etc"
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  value={filters.name}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-stone-600">
                    Brand
                  </label>

                  <select
                    name="brand"
                    className="mt-2 block w-full text-black rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={filters.brand}
                    onChange={(e) =>
                      setFilters((f) => ({
                        ...f,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  >
                    <option key={"no"}> Change Brand</option>
                    {brands.map((b, i) => (
                      <option key={i} value={b}>
                        {b.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-stone-600">
                    Category
                  </label>

                  <select
                    name="category"
                    className="mt-2 block w-full text-black rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={filters.category}
                    onChange={(e) =>
                      setFilters((f) => ({
                        ...f,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  >
                    <option key={"no"}> Change Category</option>
                    {categories.map((c, i) => (
                      <option key={i} value={c}>
                        {c.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-stone-600">
                    Status
                  </label>

                  <select
                    name="status"
                    className="mt-2 block w-full text-black cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    value={filters.status}
                    onChange={(e) =>
                      setFilters((f) => ({
                        ...f,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  >
                    <option key={"no"}> Change Status</option>
                    {statuses.map((s, i) => (
                      <option key={i} value={s}>
                        {s.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button
                  onClick={() => resetFilters()}
                  type="button"
                  className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Filters };
