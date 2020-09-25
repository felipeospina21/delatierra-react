import React from 'react';
import BlogCollection from '../../components/Blog/BlogCollection/BlogCollection'


import Header from '../../components/NavBar/Header/Header';

function Blog(props) {

	return (
		<div>
			<Header />
			<h1>Blog</h1>
			<BlogCollection/>
		</div>
	);
}

export default Blog;
