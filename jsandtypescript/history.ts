class MyHistory{
    _historyForGoingBack;
    _historyForGoingForward;

    constructor(){
        this._historyForGoingBack = [];
        this._historyForGoingForward = [];
        }

    addToHistory(id){
        this._historyForGoingBack.push(id);
    };

    getLastIdInHistory(){
        let targetId = this._historyForGoingBack.pop();
        return targetId;
    }


}
