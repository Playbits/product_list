"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { getProducts } from "./services";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products_state, setProducts } from "@/store/productsSlice";
import { formatCurrency } from "./lib/helpers";

export default function Home() {
  const products = useAppSelector(products_state);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      const { data, status } = await getProducts();
      if (status === 200) {
        setLoading(false);
        dispatch(setProducts(data));
      }
    };
    loadProducts();
  }, [dispatch]);

  if (loading)
    return <p className="w-full text-center">Loading products ... </p>;

  const ProductsList = () => {
    const loaded_products = products.products;

    const output = loaded_products.map((product) => {
      const price = product.price;
      const discount_price = price - (product.discountPercentage / 100) * price;
      return (
        <div
          key={product.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a className="bg-white w-full" href="#">
            <img
              src={product.thumbnail}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl bg-white"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {product.brand}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {product.title}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {formatCurrency(discount_price)}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    {formatCurrency(Number(product.price))}
                  </p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
    return output;
  };
  return (
    <div className="">
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
                    type="name"
                    name="search"
                    className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Search by name, type, manufacturer, etc"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-stone-600">
                      Brand
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Raspberry juice"
                      className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-stone-600">
                      Category
                    </label>

                    <select
                      id="manufacturer"
                      className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option>Cadberry</option>
                      <option>Starbucks</option>
                      <option>Hilti</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-stone-600">
                      Date of Entry
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-stone-600">
                      Status
                    </label>

                    <select
                      id="status"
                      className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    >
                      <option>Dispached Out</option>
                      <option>In Warehouse</option>
                      <option>Being Brought In</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                  <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section
        id="products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <ProductsList />
      </section>
    </div>
  );
}
