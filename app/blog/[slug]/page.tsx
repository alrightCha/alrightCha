import { notFound } from "next/navigation";
import BlogViewer from "@/app/components/blog/blog-viewer";
import { blogs } from "@/app/data/content";
import { readFile } from "fs/promises";
import { join } from "path";
import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getBlogContent(slug: string) {
  try {
    const filePath = join(process.cwd(), "public", "blogs", `${slug}.html`);
    const content = await readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = blogs.find((blog) => blog.isBlog && blog.content === slug);

  if (!blogPost) {
    return {};
  }

  const title = blogPost.title;
  const description = blogPost.description;
  const url = `https://neoseiki.dev/blog/${slug}`;
  const ogImageUrl = `/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Neoseiki",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  // Find the blog post in our data
  const blogPost = blogs.find((blog) => blog.isBlog && blog.content === slug);

  if (!blogPost) {
    notFound();
  }

  // Load the HTML content
  const htmlContent = await getBlogContent(slug);

  if (!htmlContent) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <BlogViewer
        title={blogPost.title}
        topic={blogPost.topic}
        htmlContent={htmlContent}
        createdAt={blogPost.createdAt}
      />
    </div>
  );
}
