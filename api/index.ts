import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = (page: number, limit: number) => API.get(`/posts?_limit=${limit}&_page=${page}`);
export const getUsers = (page: number, limit: number) => API.get(`/users?_limit=${limit}&_page=${page}`);
export const getUserById = (userId: string) => API.get(`/users/${userId}`);
export const getPostById = (postId: string) => API.get(`/posts/${postId}`);
export const getCommentsByPostId = (postId: string) => API.get(`/posts/${postId}/comments`);
export const getPostsByUserId = (userId: string) => API.get(`/users/${userId}/posts`);
