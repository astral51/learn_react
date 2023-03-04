import s from './myPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
	return (
		<div>
			my posts
			<div>
				new post
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