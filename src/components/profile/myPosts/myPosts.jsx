import s from './myPosts.module.css';
import Post from './post/post';

const MyPosts = (props) => {
	let postsElements = props.posts.map(elem =>
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