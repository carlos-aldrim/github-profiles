export interface UserInfo {
  avatar_url: string;
  id: number;
  name: string;
  login: string;
  bio: string;
  email: string;
  followers: number;
  following: number;
  public_repos: number;
  reposList: RepoInfo[];
  followersList: BasicInfo[];
  followingList: BasicInfo[];
  starsList: StarInfo[];
  countStars: number;
};

export interface BasicInfo {
  id: number;
  name: string;
  login: string;
};

export interface StarInfo {
  full_name: string;
  description: string;
  pushed_at: string;
  forks: number;
  stargazers_count: number;
};

export interface RepoInfo {
  name: string;
  visibility: string;
  language: string;
  pushed_at: string;
  stargazers_count: number;
};

export interface PeopleInfo {
  avatar_url: string;
  id: number;
  name: string;
  login: string;
  bio: string;
  location: string;
};