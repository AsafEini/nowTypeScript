class FileSystem{
    _root;
    _files;
    constructor(name:string){
        this._root = new Folder(0, name, 'directory', '', -1);
        this._files = [this._root];
    }

    addFolder(name,parentId){
        let newFile = new Folder(this._files.length, name, 'directory', '', parentId);
        this._files.push(newFile);
        this._files[parentId].addChild(newFile)
    }

    addFile(name, parentId, content){
        let newTextFile = new File(this._files.length, name, 'text', content, parentId);
        this._files.push(newTextFile);
        this._files[parentId].addChild(newTextFile);
    }

    deleteItem(id){
        let fileToDelete = this._files[id];
        let parentFile = this._files[fileToDelete._parentId];
        //parentFile.deleteChild(fileToDelete);
        //this._files[id] = undefined;

        parentFile.deleteChild(fileToDelete);

        for (let i = 0; i < this._files.length; i++) {
            if (this._files[i]) {
                if (this._files[i]._parentId == fileToDelete._id) {
                    this.deleteItem(this._files[i]._id);
                }

            }
        }

        this._files[id] = undefined
    }

    getFileById(id){
        return this._files[id];
    }

    getLastId(){
        return this._files.length - 1;
    }

    findParent(id){
        let targetFile = this._files[id];
        let parent = this._files[targetFile._parentId];
        return parent;
    };

    isFileNameExist(fileId, name, type){
        let file = this.getFileById(fileId);
        for (let i = 0; i < file._children.length; i++) {

            if (file._children[i]._type === type && file._children[i]._name === name) {
                return true;
            }
        }
        return false;

    }

    getUnduplicatedFileName(folderId, name, type){
        let fileName = name;
        let counter = 0;
        let flag = true;

        while (flag) {
            if (counter > 0) {
                fileName = name + "(" + counter + ")";
            }
            if (!this.isFileNameExist(folderId, fileName, type)) {
                flag = false;
            }
            counter++;
        }
        return fileName;
    }

    savingToLocalStorage(){
        let saveArray = [];
        for (let i = 0; i < this._files.length; i++) {
            if (this._files[i]) {
                saveArray.push([this._files[i]._id, this._files[i]._name, this._files[i]._type,
                    this._files[i]._parentId, this._files[i]._content]);
            }
        }
        localStorage.setItem('FileSystem', JSON.stringify(saveArray));
    }
}