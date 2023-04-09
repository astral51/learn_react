import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= 10; i++) {
		pages.push(i);
	}

	return (
		<div>
			<div className={styles.page_numbers}>
				{pages.map(p => {
					return <span className={props.currentPage === p && styles.selectedPage}
					             onClick={() => props.onPageChanged(p)}>-{p}-</span>
				})}
				<span>...</span>
				<span className={props.currentPage === pagesCount && styles.selectedPage}
				      onClick={() => props.onPageChanged(pagesCount)}>-{pagesCount}-</span>
			</div>

			{props.users.map(u =>
				<div className={styles.user_block} key={u.id}>
					<div className={styles.photo_and_description_block}>
						<div>
							<NavLink to={'/profile/' + u.id}>
								<img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
								     alt={'userPhoto'}/>
							</NavLink>
						</div>
						<div className={styles.description_and_name}>
							<div className={styles.name}>{u.name}</div>
							<div>{u.status}</div>
						</div>
					</div>
					<div className={styles.followed_block}>
						{u.followed
							? <button className={styles.unfollow} disabled={props.followingInProgress.some(id => id === u.id)}
							          onClick={() => { props.unfollow(u.id); }}>unfollow</button>

							: <button className={styles.follow} disabled={props.followingInProgress.some(id => id === u.id)}
							          onClick={() => { props.follow(u.id); }}>follow</button>
						}
					</div>
				</div>)}
		</div>
	);
};

export default Users;