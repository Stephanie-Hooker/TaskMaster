import List from "../Models/List.js";

//Private
let _state = {
    lists: [new List({
        title: "Make todo list",
        todo: ["clean house", "pay bills"]

    })]
}


//Public
export default class ValuesService {
    deleteTodo(listIndex, todoIndex) {
        _state.lists[listIndex].todo.splice(todoIndex, 1)
        this.saveLists()
    }
    addTodo(newTodo, listIndex) {
        _state.lists[listIndex].todo.push(newTodo)
        this.saveLists()
    }
    deleteList(index) {
        _state.lists.splice(index, 1)
        this.saveLists()
    }
    addList(newList) {
        _state.lists.push(new List(newList))
        this.saveLists()
    }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?

    constructor() {
        this.getLists()
    }

    get List() {
        return _state.lists.map(list => new List(list))
    }



    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
