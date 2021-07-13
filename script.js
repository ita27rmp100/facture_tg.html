function calc(){
    diff = [Number(document.getElementById("new").value)-Number(document.getElementById("old").value),Number(document.getElementById("newg").value)-Number(document.getElementById("oldg").value)] ;
    document.getElementById("dif").innerHTML = diff[0].toFixed(2) ;
    document.getElementById("con").innerHTML = (diff[0] * 1).toFixed(2) ;
    document.getElementById("difg").innerHTML = diff[1] ;
    document.getElementById("cong").innerHTML = (diff[1] * 8.80).toFixed(2) ;
    pq(diff[0],"t")
    pq(diff[1],"g")
    // الإستهلاك
    document.getElementById("ct").innerHTML = diff[0]
    document.getElementById("cg").innerHTML = diff[1]
    // المبلغ المستحق
    document.getElementById("pay").innerHTML = (250+Number(document.getElementById("pt").innerHTML)+Number(document.getElementById("pg").innerHTML)).toFixed(2) ; 
    // ضريبة الطابع
    document.getElementById("st").innerHTML = Math.round(document.getElementById("pay").innerHTML/100) ;
    // المبلغ الإجمالي 
    document.getElementById("tp").innerHTML = (Number(document.getElementById("st").innerHTML)+Number(document.getElementById("pay").innerHTML)).toFixed(2)
}
function pq(c,m){
    var mode = {
        "t":[1.7787,4.1789,4.8120,5.4796],
        "g":[0.1682,0.3245,0.3245,0.4599]
    }
    var pay = {
        "t":["pt",85.74,1],
        "g":["pg",64.62,9.71]
    }
    var t = {
        "t":[125,125,750,1000],
        "g":[1125,1375,5000,7500]
    }
    c *= pay[m][2];
        if (c <= t[m][0]){
            ttc1 = (c*mode[m][0]*0.09)+c*mode[m][0] ;
            ttc2 = 0 ;
            ttc3 = 0 ;
            ttc4 = 0 ;
        }
        else if (c >= t[m][0] && c<t[m][0]+t[m][1]){
            ttc1 = (t[m][0]*mode[m][0]*0.09)+t[m][0]*mode[m][0] ;
            ttc2 = (c - t[m][0])*mode[m][1]*0.09+(c-t[m][0])*mode[m][1] ;
            ttc3 = 0 ;
            ttc4 = 0 ;
            
        }
        else if (c<t[m][3]){
            ttc1 = (t[m][0]*mode[m][0]*0.09)+t[m][0]*mode[m][0] ;
            ttc2 = (t[m][1]*mode[m][1]*0.09)+t[m][1]*mode[m][1] ;
            ttc3 = (c - (t[m][0]+t[m][1]))*mode[m][2]*0.09+(c - (t[m][0]+t[m][1]))*mode[m][2] ;
            ttc4 = 0 ;
        }
        else if(c>=t[m][3]){
            ttc1 = (t[m][0]*mode[m][0]*0.09)+t[m][0]*mode[m][0] ;
            ttc2 = t[m][1]*mode[m][1]*0.09+t[m][1]*mode[m][1] ;
            ttc3 = t[m][2]*mode[m][2]*0.09+t[m][2]*mode[m][2] ;
            ttc4 = (c - t[m][3])*mode[m][3]*0.09+(c-t[m][3])*mode[m][3] ;
        }
        // ثمن الإستهلاك
        document.getElementById(pay[m][0]).innerHTML = (ttc1 + ttc2 + ttc3 + ttc4 + pay[m][1]).toFixed(2)
    }