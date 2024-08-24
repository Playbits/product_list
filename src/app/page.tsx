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
