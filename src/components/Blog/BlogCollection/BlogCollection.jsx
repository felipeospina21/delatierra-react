import React, { useEffect, useState } from 'react';
import BlogPostCard from '../BlogPostCard/BlogPostCard';
import { firestore } from '../../../firebase/firebase.utils';
import './BlogCollection.styles.scss';

const BlogCollection = () => {
	const [ posts, setPosts ] = useState([]);
	useEffect(() => {
		const blogPostRef = firestore.collection('blog-posts');
		const allPosts = blogPostRef
			.get()
			.then(snapshot => {
				const data = snapshot.docs.map(doc => doc.data());
				setPosts(data);
			})
			.catch(err => {
				console.log('Error', err);
			});
	}, []);
	return (
		<div className='blog-collection'>
			{posts.map((post, idx) => {
				const timeStamp = post.timeStamp.toDate().toString();
				const { title, content } = post;
				return (
					<BlogPostCard key={idx} title={title} content={content} timeStamp={timeStamp} />
				);
			})}
		</div>
	);
};

export default BlogCollection;
