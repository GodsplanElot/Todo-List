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


  document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;
    if (todoText) {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;
      todoItem.classList.add('list-group-item');
      todoItem.addEventListener('click', function() {
        todoItem.classList.toggle('completed');
      });
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'ml-2');
      deleteButton.addEventListener('click', function() {
        todoItem.remove();
      });
      todoItem.appendChild(deleteButton);
      document.getElementById('todo-list').appendChild(todoItem);
      document.getElementById('new-todo').value = '';
    }
  });

  // Existing code...

document.getElementById('filter-all').addEventListener('click', function() {
    const todos = document.querySelectorAll('#todo-list li');
    todos.forEach(todo => todo.style.display = 'block');
  });
  
  document.getElementById('filter-active').addEventListener('click', function() {
    const todos = document.querySelectorAll('#todo-list li');
    todos.forEach(todo => {
      if (todo.classList.contains('completed')) {
        todo.style.display = 'none';
      } else {
        todo.style.display = 'block';
      }
    });
  });
  
  document.getElementById('filter-completed').addEventListener('click', function() {
    const todos = document.querySelectorAll('#todo-list li');
    todos.forEach(todo => {
      if (todo.classList.contains('completed')) {
        todo.style.display = 'block';
      } else {
        todo.style.display = 'none';
      }
    });
  });
  

  // Existing code...

document.getElementById('clear-completed').addEventListener('click', function() {
    const completedTodos = document.querySelectorAll('#todo-list li.completed');
    completedTodos.forEach(todo => todo.remove());
  });
  

  // Existing code...

document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  
  
  