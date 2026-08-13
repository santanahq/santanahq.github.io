import rss from "@astrojs/rss";

export function GET() {
  return rss({
    title: "Santana Labs",
    description: "A community for research, experimentation and open documentation.",
    site: "https://santanahq.github.io",
    items: [],
  });
}
