import { Metadata } from "next";
import  Data  from "@/app/component/data/data.json"; // Import data.json
import Image from "next/image";
import CommentSection from "@/app/component/commentsection/page";

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  return Data.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the dynamic pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = Data.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "404 - Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: post.Title,
    description: post.content,
  };
}

// Dynamic page component
export default function Page({ params }: { params: { slug: string } }) {
  const post = Data.find((post) => post.slug === params.slug);

  if (!post) {
    return <h1>404 - Post Not Found</h1>;
  }

  return (
   <main className="px-4 md:px-10 space-y-10 my-20"> 
    <div  className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0">
        <div className="space-y-6 lg:w-1/2">
        <h1 className="font-bold text-3xl font-serif">{post.Title2}</h1>
        <p  className="text-lg lg:w-full">{post.content2}</p>
        </div>
      
      {post.image && (
        <div className="lg:w-1/2 flex justify-center lg:justify-end"><Image
          src={post.image}
          alt={post.Title}
          className="rounded-md w-full max-w-md "
          width={500}
          height={500}
        /></div>
      )}
    </div>
    <section className="space-y-8">
        <div className="h-[2px] rounded-full w-full bg-black"></div>
        <h3 className="text-xl font-medium">
          Comments
        </h3>
        <div className="flex flex-wrap space-x-4 items-center">
        <CommentSection></CommentSection>
        </div> 
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4 border-[1px] h-20 border-gray-700 p-4">
            <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
            <p>
              ali.khan@example.com
            </p>
          </div>
          <div className="flex items-center space-x-4 border-[1px] h-20 border-gray-700 p-4">
            <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
            <p>
              jhon.player@example.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

