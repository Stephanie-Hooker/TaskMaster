export default class List {
    //TODO You will need to create a constructor 
    //and the methods needed to create the view template for this model
    constructor(data) {
        this.title = data.title
        this.todo = data.todo || []

    }

    getTemplate(index) {
        let template =
            `
        <div class="col-sm-12 col-md-3 col-lg-2 border polaroid rotate-left text-align-center">
        <i class="icon-pushpin icon-3x text-align-center"></i> 
            <h1>${this.title}</h1>
              <ul>`
        template += this.drawTodo(index)
        template += `    </ul>
            <form onsubmit="app.controllers.listController.addTodo(event, ${index})"> 
              <div class="form-group">
                <label for="todo">Todo</label>
                <input type="text" class="form-control" name="todo" placeholder="type in a todo" required>
                </div>
                <button type="submit" class="add">add</button>
              </form>

                <button type ="button" class="delete" onclick="app.controllers.listController.deleteList(${index})">delete</button>
        </div>
    `
        return template
    }


    drawTodo(listIndex) {
        let todoTemplate = ""

        this.todo.forEach((todo, todoIndex) => {
            todoTemplate += `<li>${todo}<button class="delete x" onclick="app.controllers.listController.deleteTodo(${listIndex}, ${todoIndex})">X</button></li>`
        });
        return todoTemplate
    }

}