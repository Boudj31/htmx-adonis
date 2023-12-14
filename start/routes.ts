import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'TodosController.index')
Route.post('/todos', 'TodosController.store')
Route.get('/todos/:id', 'TodosController.show')
Route.put('/todos/complete/:id', 'TodosController.complete')
Route.delete('/todos/:id', 'TodosController.destroy')
