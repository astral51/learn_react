import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {
	let postsElements = props.posts.map(elem =>
		<Post
			message={elem.message}
			likes_count={elem.likes_count}
		/>
	);

	let newPostElement = React.createRef();

	let addPost = () =>{
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={s.posts_block}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
export default MyPosts;