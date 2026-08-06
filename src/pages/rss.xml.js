import rss from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Labs",
    description: "Community research",
    site: context.site,
  });
}
