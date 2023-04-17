import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "8d795588-d367-4cce-9444-1e7588b2a45c",
	}
});

export const userAPI = {

	async getUsers(currentPage, pageSize) {
		const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
		return response.data;
	},

	async follow(userId){
		const response = await instance.post(`/follow/${userId}`, {})
		return response.data;
	},

	async unfollow(userId){
		const response = await instance.delete(`/follow/${userId}`)
		return response.data;
	},
}

export const profileAPI = {
	async getProfile(userId){
		const response = await instance.get(`profile/${userId}`)
		return response.data;
	},
	async getStatus(userId){
		const response = await instance.get(`profile/status/${userId}`)
		return response.data;
	},
	async updateStatus(status){
		const response = await instance.put(`profile/status/`, { status: status })
		return response.data;
	}
}

export const authAPI = {
	async me(){
		const response = await instance.get(`auth/me`)
		return response.data;
	}
}
