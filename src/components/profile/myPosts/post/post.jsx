import s from './post.module.css';

const Post = (props) => {
	return (
		<div className={s.post}>
			<div className={s.avatar}>
				<img src='https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg'></img>
			</div>
			<div className={s.message}>
				{props.message}
			</div>
			<div className={s.likes}>
				<span>Likes ({props.likes_count})</span>
			</div>
		</div>
	);
}
export default Post;