"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { getProducts } from "./services";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products_state, setStateProducts } from "@/store/productsSlice";
import { formatCurrency } from "./lib/helpers";
import { Filters } from "@/components/filters";
import { Product } from "@/types";

export default function Home() {
  const _products = useAppSelector(products_state);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([] as Product[]);
  useEffect(() => {
    const loadProducts = async () => {
      const { data, status } = await getProducts();
      if (status === 200) {
        setLoading(false);
        dispatch(setStateProducts(data));
      }
    };
    loadProducts();
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      setProducts(_products.products);
    }
  }, [, _products, loading]);
  const loaded_products = useMemo(() => {
    return products;
  }, [products]);
  if (loading)
    return <p className="w-full text-center">Loading products ... </p>;

  const ProductsList = () => {
    const stars = (n: number) => {
      const s = [];
      for (let i = 0; i < n; i++) {
        s.push(
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }

      for (let i = 0; i < 5 - n; i++) {
        s.push(
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        );
      }
      return s;
    };
    const output = loaded_products.map((product) => {
      const price = product.price;
      const discount_price = price - (product.discountPercentage / 100) * price;
      return (
        <div
          key={product.id}
          className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl relative"
        >
          {product.availabilityStatus.toLowerCase() === "low stock" && (
            <span className="bg-red-600 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">
              Low in stock
            </span>
          )}
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
              <div className="flex items-center justify-center mt-3">
                {stars(Math.round(product.rating))}
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  {product.rating}
                </span>
              </div>
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
      <Filters {...{ setProducts }} />
      <section
        id="products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <ProductsList />
      </section>
    </div>
  );
}
