// pages/api/sitemap.ts

import { NextApiRequest, NextApiResponse } from 'next';
import  sitemap from '../../app/sitemap'; // Import the sitemap function from the file you created

function createSitemapXml(data: any[]) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  data.forEach((item) => {
    xml += '<url>\n';
    xml += `<loc>${item.url}</loc>\n`;
    xml += `<lastmod>${item.lastModified.toISOString()}</lastmod>\n`;
    xml += `<changefreq>${item.changeFrequency}</changefreq>\n`;
    xml += `<priority>${item.priority}</priority>\n`;
    xml += '</url>\n';
  });

  xml += '</urlset>';

  return xml;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const data = await sitemap();
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemapXml(data)); // You'll need to create a function to convert the sitemap data to XML format
    res.end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}