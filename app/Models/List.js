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
        <div class="col-sm-12 col-md-4 border">
            <h1>${this.title}</h1>
              <ul>`
        template += this.drawTodo(index)
        template += `    </ul>
            <form onsubmit="app.controllers.listController.addTodo(event, ${index})"> 
              <div class="form-group">
                <label for="todo">Todo</label>
                <input type="text" class="form-control" name="todo" placeholder="todo" required>
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
        this.todo.forEach((t, todoIndex) => {
            todoTemplate += `<li>${t}<span class="delete" onclick="app.controllers.listController.deleteTodo(${listIndex}, ${todoIndex})">X</span></li>`
        });
        return todoTemplate
    }

}