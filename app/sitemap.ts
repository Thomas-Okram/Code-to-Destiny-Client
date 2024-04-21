import axios from 'axios';
import { MetadataRoute } from "next";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: coursedata } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/get-courses`);
  console.log(coursedata.courses[0]._id)
  const changeFrequency: ChangeFrequency = "daily";

  if (!coursedata) {
    return [];
  }

  const courseslug = coursedata.courses.map((course:any) => ({
    url: `${process.env.WEB_URL}/course/${course?._id}`,
    lastModified: new Date(),
    changeFrequency,
    priority: 0.5,
  }));

  const routes = [
    "/",
    "/about",
    "/policy",
    "/courses",
  ].map((route) => ({
    url: `${process.env.WEB_URL}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority: 0.5,
  }))

  return [...routes, ...courseslug];
}