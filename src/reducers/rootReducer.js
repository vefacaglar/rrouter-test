const initState = {
    users: [],
    posts: [
        { id: "1", title: "laboriosam dolor voluptates", body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores" },
        { id: "2", title: "quas fugiat ut perspiciatis vero provident", body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam" },
        { id: "3", title: "tempora rem veritatis voluptas quo dolores vero", body: "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut" }
    ],
    todos: [
        { id: 1, content: "todo 1" },
        { id: 2, content: "todo 2" }
    ]
}

const rootReducer = (state = initState, action) => {
    // if (action.type === 'DELETE_POST') {
    //     let newPosts = state.posts.filter(t => t.id !== action.id);
    //     state.posts = newPosts;
    //     return {
    //         ...state,
    //         posts: newPosts
    //     }
    // }

    switch (action.type) {
        case 'DELETE_POST':
            let newPosts = state.posts.filter(t => t.id !== action.id);
            state.posts = newPosts;
            return {
                ...state,
                posts: newPosts
            };
        case 'ADD_TODO':
            let newTodo = action.todo
            //state.todos = [...state.todos, newTodo]
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case 'DELETE_TODO':
            let newTodos = state.todos.filter(t=> t.id !== action.id);
            state.todos = newTodos;
            return {
                ...state,
                todos: newTodos
            }
        default:
            break;
    }

    return state;
}

export default rootReducer;