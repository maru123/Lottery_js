
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
        this.resetWinners();
        if (this.size >= this.members.length) return this.members;
        var members = this.members.concat();
        var winnersCount = this.size;
        var winnerIndex;
        var winner;

        while ( winnersCount===0,winnersCount--){
            winnerIndex = Math.floor( Math.random() * members.length )
            winner = members.splice(winnerIndex,1);
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
