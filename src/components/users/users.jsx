import styles from './users.module.css';

const Users = (props) => {

	if (props.users.length === 0){
		props.setUsers([
			{
				id: 1,
				photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
				followed: true,
				fullName: 'Dmitry',
				status: 'im a boss',
				location: {city: 'Moscow', country: 'Russia'}
			},
			{
				id: 2,
				photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
				followed: false,
				fullName: 'Tamara',
				status: 'im learn python',
				location: {city: 'Saint-Petersburg', country: 'Russia'}
			},
			{
				id: 3,
				photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
				followed: false,
				fullName: 'Chief Keef',
				status: 'i like lovv66',
				location: {city: 'Florida', country: 'Usa'}
			},
			{
				id: 4,
				photoUrl: 'https://abrakadabra.fun/uploads/posts/2021-12/1640528610_2-abrakadabra-fun-p-serii-chelovek-na-avu-2.jpg',
				followed: true,
				fullName: 'Anatoly',
				status: 'this is my status',
				location: {city: 'Apatity', country: 'Russia'}
			},
		]);
	}

	return (
		<div>
			{props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img className={styles.userPhoto} src={u.photoUrl} alt={'userPhoto'}/>
					</div>
					<div>
						{u.followed
							? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
							: <button onClick={() => props.follow(u.id)}>follow</button>
						}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)}
		</div>
	);
};

export default Users;