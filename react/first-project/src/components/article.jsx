
const newsList=[
    {
        id: 1,
        title: "The quetta incident",
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis modi incidunt, laudantium, distinctio quaerat ipsa sunt amet impedit omnis maxime laboriosam. Laudantium veritatis sint reiciendis deserunt asperiores. Nemo, sed impedit!",
        author: "Anchor 1",
        date: "22-03-2025"
    },
    {
        id: 2,
        title: "Pakistan loss from India",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, tenetur necessitatibus! Odit corporis voluptatem harum minus magnam, voluptate voluptatum corrupti ratione accusantium dolorem architecto aspernatur distinctio facere, quos, quibusdam commodi!",
        author: "Author 2",
        date: "23-02-2025"
    }
]

function Article(){
    return(
        <div
        style={{
            textAlign: "left"
        }}
        >
            <h2>Latest news</h2>
            {
                newsList.map((newsItem) => {
                    return(
                    <div key={newsItem.id}>
                    <h1>{newsItem.title}</h1>
                    <p>{newsItem.content}</p>
                    <h5>Author: {newsItem.author}</h5>
                    <h6>Date: {newsItem.date}</h6>
                    </div>
                )
                })
            }
        </div>
    )
}


export default Article;