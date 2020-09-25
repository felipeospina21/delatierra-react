import React from 'react';
import './BlogPostCard.styles.scss';

const BlogPostCard = ({ title, content, timeStamp }) => {
	return (
		<div className='blog-post'>
			<h1 className=''>{title}</h1>
			<p className='blog-content'>{content}</p>
			<p className='time-stamp'>{timeStamp}</p>
			<a href='#'>ver más</a>
		</div>
	);
};

export default BlogPostCard;
