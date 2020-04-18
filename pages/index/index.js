//index.js
//获取应用实例
const app = getApp()

Page({
 data:{
   todo:[
     {
      content:"learning CSS",
      isComplete:false
     },
     {
      content:"learning VUE",
      isComplete:true
     },
     {
      content:"learning HTML",
      isComplete:false
     }
   ],
   someThing:"",
   current:2,
   selectAll:false
 },
 inputHandle(e){
   this.setData({
     someThing:e.detail.value
   })
 },
 //添加任务
  addHandle(){
    let todo = {
      content:this.data.someThing,
      isComplete:false
    }
    this.data.todo.push(todo)
    this.setData({
      todo:this.data.todo,
      someThing:""
    })
  },
  completeHandel(e){
    let item = this.data.todo[e.currentTarget.dataset.id] //点击的哪一项
    item.isComplete = !item.isComplete;
    this.data.current = item.isComplete?this.data.current-1:this.data.current+1
    this.setData({
      todo:this.data.todo,
      current:this.data.current
    })
    if(this.data.current == 0){
      this.data.selectAll = true
    }
    else if(this.data.current == this.data.todo.length){
      this.data.selectAll = false
    }
  },
  removeHandel(e){
    console.log(e.currentTarget.dataset.id)
    let item =  this.data.todo.splice(e.currentTarget.dataset.id,1)[0]
    this.data.current = item.isComplete?this.data.current:this.data.current-1
    this.setData({
      todo:this.data.todo,
      current:this.data.current
    })
  },
  selectAll(){
    this.setData({
      selectAll:!this.data.selectAll
    })
    this.data.current = this.data.selectAll?0:this.data.todo.length
    this.data.todo.forEach(item => {
      item.isComplete = this.data.selectAll
    });
    this.setData({
      todo:this.data.todo,
      current:this.data.current
    })
  },
  clearComplete(){
    let todo = this.data.todo.filter(item=>{
     return !item.isComplete 
    })
    this.setData({
      todo:todo
    })
  }
})
