
    var Lottery = function(prizeCount){
        this.prizeCount = prizeCount;
        this.members = [];
        this.winners = [];
        this.lastMembers = [];
    };
    Lottery.prototype.add = function(name,weight){
        if (this.isNotName(name)) return false;
        if (this.isNotNewMember(name)) return false;
        if (this.isNotPositiveNumber(weight)) return false;
        for (var i = 1 ; i <= weight ;i++) {
            this.members.push(name);
        }
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
    Lottery.prototype.isNotPositiveNumber = function(weight){
        if (weight < 0) {
            return true;
        }
        return false;
    };
    Lottery.prototype.getWinners = function(){
        this.winners = [];
        if (this.prizeCount >= this.members.length) return this.members;
        this.lastMembers = this.members.concat();
        var winnersCount = this.prizeCount;

        while ( winnersCount===0,winnersCount--){
            var winnerIndex = Math.floor( Math.random() * this.lastMembers.length );
            var winner = this.lastMembers[winnerIndex];
            this.winners.push(winner);
            this.remove(this.lastMembers,winner);
        }
        return this.winners;
    };
    Lottery.prototype.remove = function (members,winner) {
        var lastMembers = members.filter(function(element){return element !== winner});
        this.lastMembers = lastMembers.concat();
    };
