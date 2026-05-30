import { MetadataRoute } from 'next';
import { tools } from '@/lib/tools';

export const dynamic = 'force-static';

const BASE_URL = 'https://tyr1105.github.io/devtoolkit-online';

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map(tool => ({
    url: `${BASE_URL}${tool.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...toolPages,
  ];
}
