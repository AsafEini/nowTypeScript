class File{
    _id:number;
    _name:string;
    _type:string;
    _content:string;
    _parentId:number;
    _children;


    constructor(id:number, name:string, type:string, content:string, parentId:number){
        this._id = id;
        this._name = name;
        this._type = type;
        this._content = content;
        this._parentId = parentId;
        this._children = [];
    }

    rename(name){
        this._name=name;
    }

    getType(type){
        if(this._type === type){
            return true;
        }
        return false
    }

    changeContent(content){
        this._content = content;
    }


}