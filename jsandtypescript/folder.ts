class Folder{

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

    deleteChild(file){
        let i = 0;
        while (i < this._children.length){
            if (this._children[i] === file){
                this._children.splice(i, 1);
                break;
            }
            i++;
        }
    }

    rename(name){
        this._name = name;
    }

    addChild(file){
        this._children.push(file);
    }

    getType(type){
        if(this._type === type){
            return true
        }
        return false;
    }

}