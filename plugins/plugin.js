import fs from 'fs';
import path from 'path';
import {load} from 'cheerio';

export default function rssDocsPlugin(context, options) {
  return {
    name: 'custom-docs-rss-plugin',
    async postBuild({outDir, siteConfig}) {
      const docsDir = path.join(__dirname, '..', 'docs');
      const baseUrl = siteConfig.url;

      const items = fs.readdirSync(docsDir)
        .filter(file => file.endsWith('.md'))
        .map(file => {
          const content = fs.readFileSync(path.join(docsDir, file), 'utf-8');
          const $ = load(content);
          const titleMatch = content.match(/^#\s(.+)$/m);
          const title = titleMatch ? titleMatch[1] : file.replace('.md', '');
          const link = `${baseUrl}/docs/${file.replace('.md', '')}`;
          return `<item>
            <title>${title}</title>
            <link>${link}</link>
            <guid>${link}</guid>
          </item>`;
        });

      const rss = `<?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">
        <channel>
          <title>SCNX Docs Updates</title>
          <link>${baseUrl}/docs</link>
          <description>Recent changes in SCNX Docs</description>
          ${items.join('\n')}
        </channel>
        </rss>`;

      fs.writeFileSync(path.join(outDir, 'docs-rss.xml'), rss);
    },
  };
}