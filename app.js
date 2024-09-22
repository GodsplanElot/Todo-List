document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText) {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;
      todoItem.classList.add('list-group-item');
      document.getElementById('todo-list').appendChild(todoItem);
      document.getElementById('new-todo').value = '';
    }
  });

  document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText) {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;
      todoItem.classList.add('list-group-item');
      todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
      });
      document.getElementById('todo-list').appendChild(todoItem);
      document.getElementById('new-todo').value = '';
    }
  });
  
  