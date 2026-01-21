
export interface Amenity {
  icon: string;
  label: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
