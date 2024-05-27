export type THotel = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export type TCreateHotel = {
  title: string;
  description: string;
  images?: string[];
};

export type TSearchHotelParams = {
  limit?: number | undefined;
  offset?: number | undefined;
  title?: string | undefined;
};
