Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        tmp: '',
        toDoArray: [],
        trimmed: ''
    },
    methods: {
        addToDo: function(){
            this.trimmed = this.tmp.trim()
            if(this.trimmed.length > 3){
                this.toDoArray.push(
                    {
                    toDoText: this.trimmed,
                    toDoBool: false
                }
                );
                this.tmp = '';
            }
            else{
                this.tmp = '';
            }
        },
        removeToDo: function(index){
            this.toDoArray.splice(index,1);
        },
        doneNotDone: function(index){
            this.toDoArray[index].toDoBool = !this.toDoArray[index].toDoBool;
        }
    }
});