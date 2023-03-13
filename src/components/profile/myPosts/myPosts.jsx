import s from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: 'hello!!! this is my first post', likes_count: 10 },
		{ id: 2, message: 'okay, bro, its cool!', likes_count: 16 },
	];

	let postsElements = postsData.map(elem =>
		<Post
			message={elem.message}
			likes_count={elem.likes_count}
		/>
	);

	return (
		<div className={s.posts_block}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	);
}
export default MyPosts;