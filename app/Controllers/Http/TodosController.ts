import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {


    // Affiche la liste des tâches
    public async index({ view }: HttpContextContract) {
      const todos = await Todo.all()
      await new Promise(resolve => setTimeout(resolve, 2000)) // Délai de 2 secondes
      return view.render('todos', { todos })
    }
  
    // Ajoute une nouvelle tâche
    public async store({ request, view }: HttpContextContract) {
      const taskTitle = request.input('task')
      const todo = await Todo.create({ title: taskTitle, completed: false })
      console.log('Tâche ajoutée !');
      await new Promise(resolve => setTimeout(resolve, 2000)) // Délai de 2 secondes

      return view.render('partials/todo-item', { todo })
    }
  
    // Met à jour le statut d'une tâche
    public async complete({ params, view }: HttpContextContract) {
      const todo = await Todo.findOrFail(params.id)
      todo.completed = !todo.completed 
      await new Promise(resolve => setTimeout(resolve, 2000)) // Délai de 2 secondes

      await todo.save()

      console.log('Tâche mise à jour !');       
      return view.render('partials/todo-item', { todo })
    }
  
    // Supprime une tâche
    public async destroy({ params }: HttpContextContract) {
      await Todo.findOrFail(params.id).then((todo) => todo.delete())
      await new Promise(resolve => setTimeout(resolve, 2000)) // Délai de 2 secondes
      console.log('Tâche supprimée !');  
    }
}