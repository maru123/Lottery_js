
    var Lottery = function(size){
        this.size = size;
        this.members = [];
        this.winners = [];
    };
    Lottery.prototype.add = function(name){
        if (this.isNotName(name)) return false;
        if (this.isNotNewMember(name)) return false;
        this.members.push(name);
        return true;
    };
    Lottery.prototype.isNotName = function(name){
        if (name.length === 0){
            return true;
        }
        return false;
    };
    Lottery.prototype.isNotNewMember = function(name){
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i] === name){
                return true;
            }
        }
        return false;
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
