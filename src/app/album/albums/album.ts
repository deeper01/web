export interface Album {
  userId: number;
  id: number;
  title: string;
  thumbnailUrl: string;
  comments: Comment[];
}

