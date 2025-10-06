import React from 'react';

// Define the structure for a news article's data
interface Article {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  readMoreLink: string;
  isFeatured?: boolean;
}

// Mock data for the news section
const articlesData: Article[] = [
  {
    id: '1',
    isFeatured: true,
    category: 'Industry Insights',
    date: 'October 05, 2025',
    title: 'The Future of AI in Education: A 2025 Perspective',
    excerpt: 'Artificial Intelligence is no longer a futuristic concept but a present-day reality transforming industries. In education, AI is personalizing learning paths and automating administrative tasks to create a more efficient and effective ecosystem.',
    imageUrl: 'https://images.pexels.com/photos/7688162/pexels-photo-7688162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readMoreLink: '#',
  },
  {
    id: '2',
    category: 'Company News',
    date: 'September 28, 2025',
    title: 'We\'ve Secured $15M in Series B Funding!',
    excerpt: 'We are thrilled to announce the successful closing of our Series B funding round, led by top venture capital firms. This investment will fuel our global expansion.',
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readMoreLink: '#',
  },
  {
    id: '3',
    category: 'Student Stories',
    date: 'September 15, 2025',
    title: 'How Maria Passed Her Exam With a Top Score',
    excerpt: 'Discover the study techniques and strategies Maria used to achieve a score in the 99th percentile. Her story is an inspiration to students everywhere.',
    imageUrl: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readMoreLink: '#',
  },
   {
    id: '4',
    category: 'Product Updates',
    date: 'September 02, 2025',
    title: 'Introducing a New Way to Track Your Progress',
    excerpt: 'Our latest platform update introduces a dynamic progress tracking dashboard, designed to give you actionable insights into your study habits.',
    imageUrl: 'https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    readMoreLink: '#',
  },
];

// --- Reusable Sub-Components ---

// A styled pill for the article category
const CategoryPill: React.FC<{ category: string }> = ({ category }) => (
  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary max-w-fit">
    {category}
  </span>
);

// A styled link for "Read More"
const ReadMoreLink: React.FC<{ href: string }> = ({ href }) => (
  <a href={href} className="text-sm font-bold transition-colors text-accent group-hover:text-accent/80">
    Read More <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&rarr;</span>
  </a>
);


// --- Card Components ---

// Card for the main featured article
const FeaturedArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="overflow-hidden transition-all duration-300 border shadow-xl group bg-card rounded-2xl md:flex hover:shadow-2xl border-border">
    <div className="md:w-1/2">
      <img 
        className="object-cover w-full h-64 md:h-full" 
        src={article.imageUrl} 
        alt={article.title} 
      />
    </div>
    <div className="flex flex-col justify-center p-8 md:w-1/2">
      <CategoryPill category={article.category} />
      <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">{article.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{article.date}</p>
      <p className="mt-4 text-muted-foreground">{article.excerpt}</p>
      <div className="mt-6">
        <ReadMoreLink href={article.readMoreLink} />
      </div>
    </div>
  </div>
);

// Card for the standard articles in the grid
const StandardArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="flex flex-col overflow-hidden transition-all duration-300 border shadow-xl group bg-card rounded-2xl hover:shadow-2xl border-border">
    <img 
      className="object-cover w-full h-48" 
      src={article.imageUrl} 
      alt={article.title}
    />
    <div className="flex flex-col flex-grow p-6">
      <CategoryPill category={article.category} />
      <h3 className="mt-3 text-xl font-bold text-foreground">{article.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{article.date}</p>
      <div className="flex-grow mt-4">
        <ReadMoreLink href={article.readMoreLink} />
      </div>
    </div>
  </div>
);


// --- Main News Section Component ---

const NewsSection: React.FC = () => {
  const featuredArticle = articlesData.find((a) => a.isFeatured);
  const standardArticles = articlesData.filter((a) => !a.isFeatured);

  return (
    <section className="py-16 font-sans bg-muted/30 sm:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
            Latest News & Insights
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Stay updated with the latest trends, stories, and company announcements.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 space-y-12">
          {/* Featured Article */}
          {featuredArticle && <FeaturedArticleCard article={featuredArticle} />}
          
          {/* Standard Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {standardArticles.map((article) => (
              <StandardArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
        
        {/* "View All" Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 text-sm font-bold transition-colors rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
