
    var Lottery = function(size){
        this.size = size;
        this.membersCount = 0;
        this.members = [];
        this.winners = [];
    };
    Lottery.prototype.add = function(name){
        this.members.push(name);
        return true;
    };
    Lottery.prototype.isMembers = function(name){
        name = name.trim();
        if (name.length === 0){
            return false;
        };
        for (var i = 0; i < this.membersCount; i++) {
            if (this.members[i] === name){
                return false;
            };
        };
        return true;
    };
    Lottery.prototype.getMembers = function(){
        this.membersCount = this.members.length;
    };
    Lottery.prototype.getWinners = function(){
        var m = this.members.concat();
        var n = this.size;
        var winnerIndex;
        var winner;

        while ( n===0,n--){
            winnerIndex = Math.floor( Math.random() * this.members.length )
            winner = m.splice(winnerIndex,1);
            this.winners.push(winner[0]);
        };
        return this.winners;
    };
    Lottery.prototype.resetWinners = function(){
        this.winners = [];
    };
    Lottery.prototype.isSize = function(){
        if(this.size <= 0){
            return false;
        };
    };
    Lottery.prototype.isMembersCunt = function(){
        if(this.membersCount === 0 ){
            return false;
        };
    };
