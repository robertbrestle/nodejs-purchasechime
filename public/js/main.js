PurchaseChimeJS = {
    useStub: true,
    tableBodyId: "table-body",
    init:function() {
        setInterval(function() {
            let data = PurchaseChimeJS.getData();
            if(data != null) {
                PurchaseChimeJS.addDataRow(data);
                window.scrollTo(0, document.body.scrollHeight);
                // TODO: activate chime
            }
        }, 5000);
    }//init
    ,
    addDataRow:function(dataArr) {
        let row = document.createElement("tr");
        for(let i = 0; i < dataArr.length; i++) {
            let col = document.createElement("td");
            col.textContent = dataArr[i];
            row.appendChild(col);
        }//for
        document.getElementById(PurchaseChimeJS.tableBodyId).appendChild(row);
    }//addDataRow
    ,
    getData:function() {
        if(PurchaseChimeJS.useStub) {
            return PurchaseChimeJS.getStubData();
        }else {
            return PurchaseChimeJS.getLiveData();
        }
    }//getData
    ,
    getLiveData:function() {
        // TODO: call SQS
        return null;
    }//getLiveData
    ,
    getStubData:function() {
        if(Math.random() > 0.50) {
            let dataArr = [];
            let randomDate = new Date(Math.floor(Math.random() * Date.now()));
            let randomQuantity = Math.floor(Math.random() * 100);
            let randomTotal = (Math.random() * 1000).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

            dataArr.push(randomDate.toLocaleDateString());
            dataArr.push(randomDate.toLocaleTimeString());
            dataArr.push(randomQuantity);
            dataArr.push(randomTotal)

            return dataArr;
        }else {
            return null;
        }
    }//getStubData
};