import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/admin/courses",
          "/admin/courses-analytics",
          "/admin/create-course",
          "/admin/edit-course",
          "/admin/faq",
          "/admin/categories",
          "/admin/hero",
          "/admin/invoices",
          "/admin/orders-analytics",
          "/admin/team",
          "/admin/users",
          "/admin/users-analytics",
        ],
      },
    ],
    sitemap: "https://codetodestiny.com/sitemap.xml",
  };
}
