import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'wqj9w7ju',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skQJAhFVWN8CKgZlmtwlC0uoeDxKoV02EfXyDFxIF6wcbTOxR4W9MAD8rBuTjZgDQWQWECF8pp3vaA3PgDR6RScdaVFoKlRZIZxcocwKsVIayQlKeUnxepYiaycARDb6xIki9TCIErOab2K29OQs4m1oHQZYI8u8HG5OCM17N1GajF05v1RC',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
