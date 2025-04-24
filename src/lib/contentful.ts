import * as contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

export async function getBlogPosts() {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPage',
    //   order: '-fields.publishDate',
    });

    return response.items.map(item => ({
      title: item.fields.title,
      slug: item.fields.slug,
      publishDate: item.fields.publishDate,
      excerpt: item.fields.excerpt,
      // Add other fields as needed
    }));
  }
