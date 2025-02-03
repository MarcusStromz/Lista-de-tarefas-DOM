let tasks = [
    { id: 1, description: "Comprar pão", checked: false},
    { id: 2, description: "Passear com o cachorro", checked: false},
    { id: 3, description: "Fazer o almoço", checked: false},

]

const getCheckboxInput = ({ id, description, checked }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = `${id}-checkbox`;
    checkbox.checked = checked;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;

}

window.onload = function () {
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);

        const list = document.getElementById("todo-list");
        const toDo = document.createElement("li");
        // const button = document.createElement('li')

        toDo.id = task.id; 
        toDo.appendChild(checkbox);
       // toDo.appendChild

        list.appendChild(toDo);
    })
}