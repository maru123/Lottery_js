
    var Lottery = function(prizeCount){
        this.prizeCount = prizeCount;
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
        if (this.members.indexOf(name) > -1) {
            return true;
        }
        return false;
    };
    Lottery.prototype.getWinners = function(){
        this.winners = [];
        if (this.prizeCount >= this.members.length) return this.members;
        var members = this.members.concat();
        var winnersCount = this.prizeCount;

        while ( winnersCount===0,winnersCount--){
            var winnerIndex = Math.floor( Math.random() * members.length );
            var winner = members.splice(winnerIndex,1);
            this.winners.push(winner[0]);
        };
        return this.winners;
    };
