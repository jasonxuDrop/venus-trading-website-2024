/**
 *  This is the product page.
 */

import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  let { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  return (
    <div>
      {/* Product intro*/}
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          {/* Product image */}
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={product.imgs[0].imageSrc}
              alt={product.imgs[0].imageAlt}
              className="rounded-lg bg-gray-100"
            />
          </div>
          {/* Product description */}
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-4 text-gray-500">{product.description}</p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Product Highlights</h2>
              <ul className="list-disc list-inside text-gray-500">
                {product.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="text-gray-500">{product.details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product spec */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Spec
        </h2>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {product.features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Product image gallery */}
      <div className="bg-white py-14">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Gallery
        </h2>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {product.imgs.map((img) => (
              <a key={img.id} href={img.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={img.imageSrc}
                    alt={img.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{img.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
