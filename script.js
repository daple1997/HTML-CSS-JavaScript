function register() {
	var name=document.getElementById("firstName").value;
    alert("Hi, " + name + "!\nWelcome to the New City Bakery!\n" +
        "Now pick the shape of the cake!");
    document.getElementById("shapeCake1").disabled=false;
    document.getElementById("shapeCake2").disabled=false;
}
function typeCake(type){
    alert("You picked " + type + " cake!\nNow pick the number of layers!");
    document.getElementById("layersCake1").disabled=false;
    document.getElementById("layersCake2").disabled=false;
    document.getElementById("layersCake3").disabled=false;
}
function numberLayers(layers){
    alert("You picked " + layers + " layers!")
    if(document.getElementById("shapeCake1").checked){
        document.getElementById("rectangularProportions1").disabled=false;
        document.getElementById("rectangularProportions2").disabled=false;
        document.getElementById("rectangularProportions3").disabled=false;
    }
    else if(document.getElementById("shapeCake2").checked){
        document.getElementById("circularProportions1").disabled=false;
        document.getElementById("circularProportions2").disabled=false;
    }
}
function calculateRectangle(){
    var totalArea = parseFloat(0);
    var length = parseFloat(document.getElementById("rectangularProportions1").value);
    var width = parseFloat(document.getElementById("rectangularProportions2").value);
    totalArea = length * width;
    var extraLayers = parseFloat(0);
    if(document.getElementById("layersCake2").checked){ extraLayers = 1.00}
    if(document.getElementById("layersCake3").checked){ extraLayers = 2.00}
    var totalPrice = 18.00 + (totalArea - 900.00) * 0.02;
    var priceExtraLayers = extraLayers * 0.5 * totalPrice;
    totalPrice += priceExtraLayers;
    totalPrice = Math.round(totalPrice * 100) / 100;
    var numberLayers = extraLayers++;
    
    var invoice = "Invoice:\n";
    invoice += document.getElementById("firstName").value + " ";
    invoice += document.getElementById("lastName").value + "\n";
    invoice += document.getElementById("address").value + "\n";
    invoice += document.getElementById("postalCode").value + "\n";
    invoice += document.getElementById("phone").value + "\n";
    invoice += document.getElementById("email").value + "\n\n";
    invoice += "Your order:\n\n";
    invoice += "Rectangular cake " + length + "cm x " + width + "cm" +
        " with " + numberLayers + " layers: $" + totalPrice +'\n';

    if(document.getElementById("addition1").checked){
        totalPrice += 5.00;
        invoice += "Cream Cheese icing: $5.00\n";
    }
    if(document.getElementById("addition2").checked){
        totalPrice += 7.00;
        invoice += "Fruit and Almonds topping: $7.00\n";
    }
    if(document.getElementById("addition3").checked){
        totalPrice += 4.00;
        invoice += "Fruit jam filling: $4.00\n";
    }
    totalPrice = Math.round(totalPrice * 100) / 100;
    invoice += "Total: $" + totalPrice;
    alert(invoice);
}
function calculateCircle(){
    var totalAreaCircle = parseFloat(0);
    var radiusCircle = parseFloat(document.getElementById("circularProportions1").value);
    totalAreaCircle = Math.PI * radiusCircle * radiusCircle;
    var extraLayersCircle = parseFloat(0);
    if(document.getElementById("layersCake2").checked){ extraLayersCircle = 1.00}
    if(document.getElementById("layersCake3").checked){ extraLayersCircle = 2.00}
    var totalPriceCircle = 15.00 + (totalAreaCircle - 706.50) * 0.02;
    var priceExtraLayersCircle = (extraLayersCircle * 0.5) * totalPriceCircle;
    totalPriceCircle += priceExtraLayersCircle;
    totalPriceCircle = Math.round(totalPriceCircle * 100) / 100;
    var numberLayers = extraLayersCircle++;
    
    var invoice = "Invoice:\n";
    invoice += document.getElementById("firstName").value + " ";
    invoice += document.getElementById("lastName").value + "\n";
    invoice += document.getElementById("address").value + "\n";
    invoice += document.getElementById("postalCode").value + "\n";
    invoice += document.getElementById("phone").value + "\n";
    invoice += document.getElementById("email").value + "\n\n";
    invoice += "Your order:\n\n";
    invoice += "Rectangular cake " + radiusCircle + "cm" +
       " with " + numberLayers + " layers: $" + totalPriceCircle +"\n";

    if(document.getElementById("addition1").checked ==true){
        totalPriceCircle += 5.00;
        invoice += "Cream Cheese icing: $5.00\n";
    }
    if(document.getElementById("addition2").checked == true){
        totalPriceCircle += 7.00;
        invoice += "Fruit and Almonds topping: $7.00\n";
    }
    if(document.getElementById("addition3").checked == true){
        totalPriceCircle += 4.00;
        invoice += "Fruit jam filling: $4.00\n";
    }
    totalPriceCircle = Math.round(totalPriceCircle * 100) / 100;
    invoice += "Total: $" + totalPriceCircle;
    alert(invoice);
}