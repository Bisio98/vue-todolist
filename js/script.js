Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        tmp: '',
        toDoArray: [],
    },
    methods: {
        addToDo: function(){
            let trimmed = this.tmp.trim()
            this.toDoArray.push(
                {
                toDoText: trimmed,
                toDoBool: false
            }
            );
            this.tmp = '';
        },
        removeToDo: function(index){
            this.toDoArray.splice(index,1);
        },
        doneNotDone: function(index){
            this.toDoArray[index].toDoBool = !this.toDoArray[index].toDoBool;
        }
    }
});