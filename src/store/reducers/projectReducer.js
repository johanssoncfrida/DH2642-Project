const initState = {
    projects: [
        {id: '1', title: 'help', content: 'bla'},
        {id: '2', title: 'help me', content: 'bla'},
        {id: '3', title: 'help you', content: 'bla'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer