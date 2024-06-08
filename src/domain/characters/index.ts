export interface Character {
  id: string;
  name: string;
  description: string;
  avatar_url: string;
  is_favorited: boolean;
  comics: {
    name: string;
    resource_url: string;
  }[];
}
