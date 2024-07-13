export class Post {
    title: string
    description: string
    author: string
    date: string
    thumbnail: string

    constructor(
        title: string,
        description: string,
        author: string,
        date: string,
        thumbnail: string
    ) {
        this.title = title
        this.description = description
        this.author = author
        this.date = date
        this.thumbnail = thumbnail
    }
}