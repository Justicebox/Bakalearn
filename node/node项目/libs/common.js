module.exports = {
    timeDate: function(timestamp) {
        var oDate = new Date();
        oDate.setTime(timestamp)
        return oDate.getFullYear() + "-" + toDou(oDate.getMonth()) + "-" + toDou(oDate.getDate() + "  " + toDou(oDate.getHours()) + ":" + toDou(oDate.getMinutes()) + ":" + toDou(oDate.getSeconds()))
    }
}

function toDou(n) {
    return n < 10 ? "0" + n : "" + n
}