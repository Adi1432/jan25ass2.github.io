var url = "https://api2.binance.com/api/v3/ticker/24hr";

var container = document.getElementById("container");
fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((finalData) => {
    console.log(finalData);
    for (var i = 0; i < 100; i++) {
      var div = document.createElement("div");
      div.className = "cardConatainer";

      var div1 = document.createElement("div");
      div1.className = "con1";

      var h5 = document.createElement("h5");
      h5.innerText = "symbol";
      var para = document.createElement("p");
      para.innerText = finalData[i].symbol;

      var div2 = document.createElement("div");
      div2.className = "con1";

      var h51 = document.createElement("h5");
      h51.innerText = "highPrice";
      var para1 = document.createElement("p");
      para1.innerText = finalData[i].highPrice;

      var div3 = document.createElement("div");
      div3.className = "con1";

      var h52 = document.createElement("h5");
      h52.innerText = "lowPrice";
      var para2 = document.createElement("p");
      para2.innerText = finalData[i].lowPrice;
      div1.append(h5, para);
      div2.append(h51, para1);
      div3.append(h52, para2);
      div.append(div1, div2, div3);
      container.appendChild(div);
    }
  })
  .catch(() => {
    console.log("api failed");
  });
