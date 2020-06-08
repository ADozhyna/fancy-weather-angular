export interface Image {
  results: ImageData[];
  total: number;
  total_pages: number;
}

interface ImageData {
  alt_description: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: string;
  sponsorship?: null;
  tags: Tag[];
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
}

interface Links {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface Tag {
  type: string;
  title: string;
  source: Source;
}

interface Source {
  ancestry: Ancestry;
  cover_photo: Cover;
  description: string;
  meta_description: string;
  meta_title: string;
  subtitle: string;
  title: string;
}

interface Ancestry {
  type: Type;
  category: Type;
  subcategory: Type;
}

interface Type {
  slug: string;
  pretty_slug: string;
}

interface Cover {
  alt_description: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: null;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: Links;
  promoted_at: null;
  sponsorship: null;
  updated_at: string;
  urls: Urls;
  user: User;
  width: number;
}

interface Urls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

interface User {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  id: string;
  instagram_username: string;
  last_name: string;
  links: UserLinks;
  location: string;
  name: string;
  portfolio_url: string;
  profile_image: PortfolioImage;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string;
  updated_at: string;
  username: string;
}

interface UserLinks {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
}

interface PortfolioImage {
  large: string;
  medium: string;
  small: string;
}

