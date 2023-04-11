import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "8d795588-d367-4cce-9444-1e7588b2a45c",
	}
});

export const userAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	follow(userId){
		return instance.post(`/follow/${userId}`, {}).then(response => response.data);
	},

	unfollow(userId){
		return instance.delete(`/follow/${userId}`).then(response => response.data);
	},
}

export const profileAPI = {
	getProfile(userId){
		return instance.get(`profile/${userId}`).then(response => response.data);
	}
}

export const authAPI = {
	me(){
		return instance.get(`auth/me`).then(response => response.data);
	}
}
