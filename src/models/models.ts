export class ThumbImage {
    contentUrl: string;
}
export class Image {
    url: string;
    thumbnail:ThumbImage;
}

export class News {
    image: Image;
    name: string;
    imgurl: string;
    webSearchUrl: string;
    description: string;
    datePublished: string;
    category: string;
     url: string;

}
export class BingSearch {
    value: Array<News>;
}