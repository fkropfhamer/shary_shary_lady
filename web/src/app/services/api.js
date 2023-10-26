import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_UR || "http://localhost:3001/api";

// Create an instance of Axios with custom configuration
const apiInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getGroups: () => apiInstance.get('/groups'),
  getGroupById: (groupId) => apiInstance.get(`/groups/${groupId}`),
  getGroupsByUserId: (userId) => apiInstance.get(`/groups/user/${userId}`),
  getMembersByGroupId: (groupId) => apiInstance.get(`/groups/members/${groupId}`),
  getSharedSongsByGroupId: (groupId) => apiInstance.get(`/groups/songs/${groupId}`),
  shareActiveSong: (shareData) => apiInstance.post(`/groups/songs`, shareData),
  createGroup: (groupData) => apiInstance.post('/groups', groupData),
  loginUser: (loginData) => apiInstance.post('/auth/login', loginData),
  registerUser: (registerData) => apiInstance.post('/auth/register', registerData),
  inviteUsernameToGroup: (inviteData) => apiInstance.post('/groups/invite', inviteData),
};

export default api;
