const initState = {
    posts: [
        { id: "1", title: "laboriosam dolor voluptates", body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores" },
        { id: "2", title: "quas fugiat ut perspiciatis vero provident", body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam" },
        { id: "3", title: "tempora rem veritatis voluptas quo dolores vero", body: "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut" }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(t=> t.id !== action.id);
        state.posts = newPosts;
    }
    return state;
}

export default rootReducer;