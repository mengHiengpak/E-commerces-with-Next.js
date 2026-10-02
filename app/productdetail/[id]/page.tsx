import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/sections/product-detail";
import { getProduct, listRelatedProducts } from "@/lib/controller/catalog.controller";
import { AppError } from "@/lib/errors";
import type { Product } from "@/lib/types";

/**
 * A single product.
 *
 * `params` is a Promise in Next.js 16 — reading it synchronously no longer works
 * and used to silently yield `undefined`, which `getProduct` would then reject as
 * a malformed id. Awaiting it is what actually reaches MongoDB.
 *
 * A Server Component: the product and its siblings are read here and passed down,
 * so the first HTML response already has the real price, image and copy in it.
 */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await loadProduct(id);
  // Only after the product exists, since the rail is scoped by its category.
  const related = await listRelatedProducts(product);

  return <ProductDetail product={product} related={related} />;
}

/**
 * Title and description from the product itself.
 *
 * Failures return a bare title instead of propagating: a missing document should
 * render the 404 page, not turn a `<head>` lookup into a 500.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const product = await getProduct(id);

    return {
      title: product.name,
      description: product.subtitle || `${product.name} by ${product.vendor}`,
      openGraph: {
        title: product.name,
        description: product.subtitle,
        images: [{ url: product.image }],
      },
    };
  } catch {
    return { title: "Product" };
  }
}

/**
 * Turns a bad or unknown id into the 404 page.
 *
 * `getProduct` raises a `ValidationError` for an id Mongo would reject and a
 * `NotFoundError` for one that simply is not there; both are the caller's problem,
 * so both render 404. Anything else is ours and is left to bubble up.
 */
async function loadProduct(id: string): Promise<Product> {
  try {
    return await getProduct(id);
  } catch (error) {
    if (error instanceof AppError) notFound();
    throw error;
  }
}