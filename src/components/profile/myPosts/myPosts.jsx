import React from 'react';
import s from './myPosts.module.css';
import Post from './post/post';



const MyPosts = (props) => {
	let postsElements = props.posts.map(elem =>
		<Post
			key={elem.id}
			message={elem.message}
			likes_count={elem.likes_count}
		/>
	).reverse();

	let newPostElement = props.newPostText;

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = (event) => {
		let text = event.target.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.posts_block}>

			<h3>My posts</h3>
			<div className={s.new_post_wrapper}>

				<span className={s.add_new_post_title}>
					Add new post:
				</span>

				<div className={s.new_add_post_wrapper}>
					<div>
						<textarea className={s.new_post_textarea}
							onChange={onPostChange}
							value={newPostElement}
						/>
					</div>
					<div>
						<button className={s.send_new_post_button} onClick={onAddPost}>Add post</button>
					</div>
				</div>

			</div>

			<div className={s.separator}></div>

			<div className={s.posts}>
				{postsElements}
			</div>

		</div>
	);
}
export default MyPosts;