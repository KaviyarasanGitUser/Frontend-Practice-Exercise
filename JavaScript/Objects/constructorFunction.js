function CreatePost(title, body, author){
        this.title = title,
        this.body = body,
        this.author = author,
        this.views = 0,
        this.comments =  [],
        this.isLive = false
}

const post = new CreatePost('post','Picture','Kaviyarasan');
console.log(post);