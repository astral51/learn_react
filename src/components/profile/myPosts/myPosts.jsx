import s from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
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
				<Post 
					message='hello!!! this is my first post' 
					like_count='10'
				/>
				<Post 
					message='okay, bro, its cool!'
					like_count='16'
				/>
			</div>
		</div>
	);
}
export default MyPosts;