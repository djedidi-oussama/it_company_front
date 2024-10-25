// LatestBlogPosts.jsx
import React from 'react';
import Link from 'next/link';
const LatestBlogPosts = ({blogs}) => {
    return (
        <section className='py-16'>
            <div className='max-w-7xl mx-auto px-4 lg:px-0'>
                <h2 className='text-3xl md:text-5xl font-bold text-center mb-10' style={{ color: 'var(--text-dark)' }}>
                    Latest Blog Posts
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {blogs.map(post => (
                        <div 
                            key={post._id} 
                            className='bg-card-color text-center rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'
                            style={{ backgroundColor: 'var(--card-color)' }}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className='w-full h-48 object-cover'
                            />
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-2' style={{ color: 'var(--text-dark)' }}>
                                    {post.title}
                                </h3>
                                <p className='text-text-dark mb-4'>{post.description}</p>
                                <Link href={`/blog/${post._id}`}>
                                    <span 
                                        className='bg-main-yellow hover:bg-hover-yellow text-black font-bold py-2 px-4 rounded-lg inline-block transition-all duration-300'
                                        aria-label={`Read more about ${post.title}`}
                                    >
                                        Read More
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogPosts;
