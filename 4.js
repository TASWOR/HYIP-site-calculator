window.onload=function () {
    var money = document.getElementById("money");
    var range = document.getElementById("range");
    var type = document.getElementById("type");
    var percentDay = document.getElementById("percentDay");
    var percent = document.getElementById("percent");
    var accruals = document.getElementById("accruals");
    var depos = document.getElementById("depos");
    var summDepos=document.getElementById("summDepos");
    var getMoney=document.getElementById("getMoney");
    var accrual =document.getElementById("accrual");
    var termDepos = document.getElementById("termDepos");
    var title = document.getElementById("title");
    var p = document.getElementsByTagName("p");
    for(var i = 0;i<p.length;i++){
        p[i].style.display="none";
    }
    range.onchange=function () {
        money.value = range.value;
        summDepos.innerHTML=range.value;
        getMoney.innerHTML=range.value
    };
    money.onchange=function () {
        range.value = money.value;
        summDepos.innerHTML=money.value;
        getMoney.innerHTML=range.value
    };

    function fillingTable(button,percentValue,typeValue,percentDayValue,accrualsValue,deposValue,minMoney,maxMoney) {
        document.getElementById(button).onclick = function () {
            var p = document.getElementsByTagName("p");
            for(var i = 0;i<p.length;i++){
                p[i].style.display="block";
            }
            title.style.display="none";
            percent.innerHTML = percentValue;
            type.innerHTML = typeValue;
            percentDay.innerHTML = percentDayValue;
            accruals.innerHTML = accrualsValue;
            depos.innerHTML = deposValue;
            range.min=minMoney;
            range.max = maxMoney;
            range.value = minMoney;
            money.value= minMoney;
            summDepos.innerHTML=minMoney;
            if (button === "typePal") {
                accrual.innerHTML="В КОНЦЕ СРОКА";
                termDepos.innerHTML="5 ДНЕЙ";
                getMoney.innerHTML="108";
                range.onchange=function () {
                    money.value = range.value;
                    getMoney.innerHTML=parseFloat(range.value)*0.08 +parseFloat(range.value);
                    summDepos.innerHTML=range.value
                };
                money.onchange=function () {
                    range.value = money.value;
                    getMoney.innerHTML=parseFloat(money.value)*0.08+parseFloat(money.value);
                    summDepos.innerHTML=money.value
                }
            }
            else if(button==="typeGold"){
                accrual.innerHTML="3.00% КАЖДЫЕ 24 ч.";
                termDepos.innerHTML="10 ДНЕЙ";
                getMoney.innerHTML="12750";
                range.onchange=function () {
                    money.value = range.value;
                    getMoney.innerHTML=parseFloat(range.value)*0.275 + parseFloat(range.value);
                    summDepos.innerHTML=range.value

                };
                money.onchange=function () {
                    range.value = money.value;
                    getMoney.innerHTML=parseFloat(money.value)*0.275 + parseFloat(money.value);
                    summDepos.innerHTML=money.value
                }
            }
            else if(button==="typeGas"){
                accrual.innerHTML="4% КАЖДЫЕ 24 ч.";
                termDepos.innerHTML="15 ДНЕЙ";
                getMoney.innerHTML="48001.6";
                range.onchange=function () {
                    money.value = range.value;
                    getMoney.innerHTML=parseFloat(range.value)*0.6 + parseFloat(range.value);
                    summDepos.innerHTML=range.value

                };
                money.onchange=function () {
                    range.value = money.value;
                    getMoney.innerHTML=parseFloat(money.value)*0.6 + parseFloat(money.value);
                    summDepos.innerHTML=money.value
                }
            }
            else if(button==="typeOil"){
                accrual.innerHTML="В КОНЦЕ СРОКА";
                termDepos.innerHTML="20 ДНЕЙ";
                getMoney.innerHTML="2700";
                range.onchange=function () {
                    money.value = range.value;
                    getMoney.innerHTML=parseFloat(range.value)*0.8 + parseFloat(range.value);
                    summDepos.innerHTML=range.value
                };
                money.onchange=function () {
                    range.value = money.value;
                    getMoney.innerHTML=parseFloat(money.value)*0.8 + parseFloat(money.value);
                    summDepos.innerHTML=money.value
                }
            }
            document.getElementById("rubMoney").onclick = function () {
                if (button === "typePal") {
                    depos.innerHTML = "100.00 - 5000.00 RUB";
                    range.min = "100";
                    range.max = "5000";
                    range.step="1";
                    range.value = "100";
                    money.value= "100";
                    summDepos.innerHTML=minMoney;
                    getMoney.innerHTML="108";
                }
                else if (button === "typeGold") {
                    depos.innerHTML = "10000.00 - 30000.00 RUB";
                    range.min = "10000";
                    range.max = "30000";
                    range.step="1000";
                    range.value = "10000";
                    money.value= "10000";
                    summDepos.innerHTML="10000";
                    getMoney.innerHTML="12750";
                }
                else if (button === "typeGas") {
                    depos.innerHTML = "30001.00 - 500000.00 RUB";
                    range.min = "30001";
                    range.max = "500000";
                    range.step="1";
                    range.value = "30001";
                    money.value= "30001";
                    summDepos.innerHTML="30001";
                    getMoney.innerHTML="48001.6";
                }
                else if (button === "typeOil") {
                    depos.innerHTML = "1500.00 - 10000.00 RUB";
                    range.min = "1500";
                    range.max = "10000";
                    range.step="1";
                    range.value = "1500";
                    money.value= "1500";
                    summDepos.innerHTML="1500";
                    getMoney.innerHTML="2700";
                }
            };
            document.getElementById("usdMoney").onclick=function () {
                if (button === "typePal"){
                    depos.innerHTML = "2.00 - 100.00 USD";
                    range.min = "2";
                    range.max = "100";
                    range.step = "1";
                    range.value = "2";
                    money.value= "2";
                    summDepos.innerHTML="2";
                    getMoney.innerHTML="2.16";
                }
                else if (button === "typeGold") {
                    depos.innerHTML = "200.00 - 600.00 USD";
                    range.min = "200";
                    range.max = "600";
                    range.step="1";
                    range.value = "200";
                    money.value= "200";
                    summDepos.innerHTML="200";
                    getMoney.innerHTML="255";
                }
                else if (button === "typeGas") {
                    depos.innerHTML = "601.00 - 10000.00 USD";
                    range.min = "601";
                    range.max = "10000";
                    range.step="1";
                    range.value = "601";
                    money.value= "601";
                    summDepos.innerHTML="601";
                    getMoney.innerHTML="961.60";
                }
                else if (button === "typeOil") {
                    depos.innerHTML = "30.00 - 200.00 USD";
                    range.min = "30";
                    range.max = "200";
                    range.step="1";
                    range.value = "30";
                    money.value= "30";
                    summDepos.innerHTML="30";
                    getMoney.innerHTML="54";
                }
            };
            document.getElementById("btcMoney").onclick=function () {
              if(button === "typePal"){
                  depos.innerHTML = "0.00050000 - 0.02500000 BTC";
                  range.min = "0.00050000";
                  range.max = "0.02500000";
                  range.step = "0.0001";
                  range.value = "0.00050000";
                  money.value= "0.00050000";
                  getMoney.innerHTML="0.00054";
                  summDepos.innerHTML="0.00050000";
              }
              else if (button === "typeGold") {
                  depos.innerHTML = "0.05000000 - 0.15000000 BTC";
                  range.min = "0.05000000";
                  range.max = "0.15000000";
                  range.step="0.00000001";
                  range.value = "0.05000000";
                  money.value= "0.05000000";
                  getMoney.innerHTML="0.06375";
                  summDepos.innerHTML="0.05000000";
              }
              else if (button === "typeGas") {
                  depos.innerHTML = "0.15025000 - 2.50000000 BTC";
                  range.min = "0.15025000";
                  range.max = "2.50000000";
                  range.step="0.00000001";
                  range.value = "0.15025000";
                  money.value= "0.15025000";
                  getMoney.innerHTML="0.2404";
                  summDepos.innerHTML="0.15025000";
              }
              else if (button === "typeOil") {
                  depos.innerHTML = "0.00750000 - 0.05000000 BTC";
                  range.min = "0.00750000";
                  range.max = "0.05000000";
                  range.step="0.00000001";
                  range.value = "0.00750000";
                  money.value= "0.00750000";
                  getMoney.innerHTML="0.0135";
                  summDepos.innerHTML="0.00750000";
              }
            };
        }
    }
    fillingTable("typePal","+108%","Палладий","8% за 5 дней","1 за 120 ч.","100.00 - 5000.00 RUB","100","5000");
    fillingTable("typeGold","+127,5%","Золото","27.5% за 10 дней","3% каждые 24 ч.","10000.00 - 30000.00 RUB","10000","30000");
    fillingTable("typeGas","+160%","Газ","60% за 15 дней","4% каждые 24 ч.","30001.00 - 500000.00 RUB","30001","500000");
    fillingTable("typeOil","+180%","Нефть","80% за 20 дней","1 за 480 ч.","1500.00 - 10000.00 RUB","1500","10000");
};