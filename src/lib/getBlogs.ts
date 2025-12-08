export interface Blog {
  id: string;
  img: string;
  imgAlt: string;
  title: string;
  date: string;
  metaTitle: string;
  metaDesc: string;
  metaKey: string;
  content: any[];
  questions: any[];
}


export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch('https://globeswayimmigration.com/backend/getarticle.php', {
    method: "GET",
    cache: "no-store",          
    next: { revalidate: 3600 }, // ISR for page
  });

  if (!res.ok) {
    throw new Error('Error in fetching blogs');
  }

  return res.json();
}