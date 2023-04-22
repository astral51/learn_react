import s from './myPosts.module.css';
import Post from './post/post';
import {useForm} from "react-hook-form";
import React from "react";



const CreateNewPost = (props) => {

	const {register, resetField, handleSubmit} = useForm();


	function onSubmit(data){
		props.addPost(data.newText);
		resetField('newText')
	}

	return(
		<div>
			<form className={s.new_add_post_wrapper} onSubmit={handleSubmit(onSubmit)}>
				<div>
					<textarea
						className={s.new_post_input}
						{...register('newText')}
						placeholder={'Enter your post text...'}
					/>
				</div>

				<button className={s.send_new_post_button} type="submit">
					Add post
				</button>

			</form>
		</div>
	);
};


const MyPosts = (props) => {
	let postsElements = props.posts.map(elem =>
		<Post
			key={elem.id}
			message={elem.message}
			likes_count={elem.likes_count}
		/>
	).reverse();


	return (
		<div className={s.posts_block}>

			<h3>My posts</h3>
			<div className={s.new_post_wrapper}>
				<span className={s.add_new_post_title}>
					Add new post:
				</span>
				<CreateNewPost addPost={props.addPost} />
			</div>

			<div className={s.separator}></div>

			<div className={s.posts}>
				{postsElements}
			</div>

		</div>
	);
}
export default MyPosts;