import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/paginator/paginator";
import Preloader from "../common/preloader/preloader";


const Users = (props) => {

	return (
		<div>
			<Paginator currentPage={props.currentPage} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
			           onPageChanged={props.onPageChanged}/>

			{props.isFetching ? <Preloader/> :

			props.users.map(u =>
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
							          onClick={() => {
								          props.unfollowThunk(u.id);
							          }}>unfollow</button>

							: <button className={styles.follow} disabled={props.followingInProgress.some(id => id === u.id)}
							          onClick={() => {
								          props.followThunk(u.id);
							          }}>follow</button>
						}
					</div>
				</div>)}
		</div>
	);
};

export default Users;