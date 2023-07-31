 const card=document.querySelectorAll('.add-card');

 var product=[
    {
        "id": 1,
        "name": "Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
        "description": "About this item 6GB RAM Storage: 128GB color: Black",
        "image": "/assets/imags/61P0+za20AL._AC_SX569_.jpg",
        "price": 730.00,
        "tag":"p1",
        "incard":0
    },
    {
        "id": 2,
        "name": "Toshiba LED 32 Inch HD TV with Built-In Receiver",
        "description": "Brand: ToshibaTV type: standard TVResolution: 1366 x 768Aspect ratio: 16:09Viewing angle: 178 degreeFilter type: comb filterAudio system: Dolby plus technologySpeaker output: 8 watt x 2Color: blackRemote control: yes  Unique and fashionable design.of high quality material suitable weight Compatible with multiple devices",
        "image": "/assets/imags/61wRclgkaAL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "price": 255,
        "tag":"p2",
        "incard":0
    },
    {
        "id": 3,
        "name": "Careflection M10 in-Ear Wireless",
        "description": "About this itemIndividual power display of earbuds and charging case - L/R Bluetooth earbuds battery separated LED display design, it will display how much battery remaining in the charging base When putting into the case, you can know when is the best time to charge. Up to 220 hours play time, charge as you go - built-in 2000mAh rechargeable battery charging case, wireless earbuds can play for 5.5 hours on a single charge, portable charger box recharge can provide 220 hours playback. It can be charged automatically once the earbuds is put in the charging case. You can go out for fun without worrying about battery shortage, your needs are met from the start of the day to its end.",
        "image": "/assets/imags/61Z5UXIdIXL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "price":295.00,
        "tag":"p3",
        "incard":0
    },
    {
        "id": 4,
        "name": "Jmary KP-2234 Portable Lightweight Aluminum Tripod - Black",
        "description": "العلامة التجارية : JMARY  متوافق مع : كاميرا الفيديو نوع الملحقات : حامل ثلاثي",
        "image": "/assets/imags/71GLMJ7TQiL._AC_SX679_.jpg",
        "price":  950,
        "tag":"p4",
        "incard":0
    },
    {
        "id": 5,
        "name": "Bosch Series 4 Wet & Dry Multi Functional ",
        "description": " Parquet and other delicate floor surfaces require especially gentle cleaning. Our parquet brush gently and thoroughly vacuums all sensitive floor surfaces, thanks to its soft bristles made of natural hair.",
        "image": "/assets/imags/71pYUFrEGHL._AC_SX569_.jpg",
        "price": 100,
        "tag":"p5",
        "incard":0
    },
    {
        "id": 6,
        "name": "Yoss 16A Triple Load Power Adapter",
        "description": " High quality joint for all electrical devices. Safety plug to protect childrenExcellent for mobile chargers which does not allow charging plug to be vibrated.Works efficiently and securely on all high load electrical devices such as warmers, boilers, automatic washers, electric afarans and all other devices.Global standards Non-flammable outer body High quality brass insoles ",
        "image": "/assets/imags/71T5NVOgbpL._AC_SX569_.jpg",
        "price": 100,
        "tag":"p5",
        "incard":0
    },
    {
        "id": 7,
        "name": "Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
        "description": "About this item 6GB RAM Storage: 128GB color: Black",
        "image": "/assets/imags/71WDBqDDbKL._AC_SX466_.jpg",
        "price": 100,
        "tag":"p7",
        "incard":0
    },
    {
        "id": 8,
        "name": "Toshiba LED 32 Inch HD TV with Built-In Receiver, ",
        "description": "Brand: ToshibaTV type: standard TVResolution: 1366 x 768Aspect ratio: 16:09Viewing angle: 178 degreeFilter type: comb filterAudio system: Dolby plus technologySpeaker output: 8 watt x 2Color: blackRemote control: yes  Unique and fashionable design.of high quality material suitable weight Compatible with multiple devices",
        "image": "/assets/imags/81i6m64KmUL.__AC_SY300_SX300_QL70_ML2_.jpg",
        "price": 200,
        "tag":"p8",
        "incard":0
    },
    {
        "id": 9,
        "name": "Careflection M10 in-Ear Wireless Touch Bluetooth",
        "description": "About this itemIndividual power display of earbuds and charging case - L/R Bluetooth earbuds battery separated LED display design, it will display how much battery remaining in the charging base When putting into the case, you can know when is the best time to charge. Up to 220 hours play time, charge as you go - built-in 2000mAh rechargeable battery charging case, wireless earbuds can play for 5.5 hours on a single charge, portable charger box recharge can provide 220 hours playback. It can be charged automatically once the earbuds is put in the charging case. You can go out for fun without worrying about battery shortage, your needs are met from the start of the day to its end.",
        "image": "/assets/imags/product-1.jpg",
        "price": 400,
        "tag":"p9",
        "incard":0
    },
    {
        "id": 10,
        "name": "Jmary KP-2234 Portable Lightweight Aluminum Tripod - Black",
        "description": "العلامة التجارية : JMARY  متوافق مع : كاميرا الفيديو نوع الملحقات : حامل ثلاثي",
        "image": "/assets/imags/product-2.jpg",
        "price": 100,
        "tag":"p10",
        "incard":0
    },
    {
        "id": 11,
        "name": "Bosch Series 4 Wet & Dry Multi Functional ",
        "description": " Parquet and other delicate floor surfaces require especially gentle cleaning. Our parquet brush gently and thoroughly vacuums all sensitive floor surfaces, thanks to its soft bristles made of natural hair.",
        "image": "/assets/imags/product-3.jpg",
        "price": 100,
        "tag":"p11",
        "incard":0
    },
    {
        "id": 12,
        "name": "Yoss 16A Triple Load Power Adapter - High Quality  ",
        "description": " High quality joint for all electrical devices. Safety plug to protect childrenExcellent for mobile chargers which does not allow charging plug to be vibrated.Works efficiently and securely on all high load electrical devices such as warmers, boilers, automatic washers, electric afarans and all other devices.Global standards Non-flammable outer body High quality brass insoles ",
        "image": "/assets/imags/product-4.jpg",
        "price": 100,
        "tag":"p12",
        "incard":0
    },
    {
        "id": 13,
        "name": "Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
        "description": "About this item 6GB RAM Storage: 128GB color: Black",
        "image": "/assets/imags/product-5.jpg",
        "price": 100,
        "tag":"p13",
        "incard":0
    },
    {
        "id": 14,
        "name": "Toshiba LED 32 Inch HD TV with Built-In Receiver, Black - 32L3965EA ",
        "description": "Brand: ToshibaTV type: standard TVResolution: 1366 x 768Aspect ratio: 16:09Viewing angle: 178 degreeFilter type: comb filterAudio system: Dolby plus technologySpeaker output: 8 watt x 2Color: blackRemote control: yes  Unique and fashionable design.of high quality material suitable weight Compatible with multiple devices",
        "image": "/assets/imags/product-6.jpg",
        "price":100,
        "tag":"p14",
        "incard":0
    },
    {
        "id": 15,
        "name": "Careflection M10 in-Ear Wireless Touch Bluetooth ",
        "description": "About this itemIndividual power display of earbuds and charging case - L/R Bluetooth earbuds battery separated LED display design, it will display how much battery remaining in the charging base When putting into the case, you can know when is the best time to charge. Up to 220 hours play time, charge as you go - built-in 2000mAh rechargeable battery charging case, wireless earbuds can play for 5.5 hours on a single charge, portable charger box recharge can provide 220 hours playback. It can be charged automatically once the earbuds is put in the charging case. You can go out for fun without worrying about battery shortage, your needs are met from the start of the day to its end.",
        "image": "/assets/imags/product-thumb-1.jpg",
        "price": 100,
        "tag":"p15",
        "incard":0
    },
    {
        "id": 16,
        "name": "Jmary KP-2234 Portable Lightweight Aluminum Tripod - Black",
        "description": "العلامة التجارية : JMARY  متوافق مع : كاميرا الفيديو نوع الملحقات : حامل ثلاثي",
        "image": "/assets/imags/h4-slide.png",
        "price": 100,
        "tag":"p16",
        "incard":0
    },
    {
        "id": 17,
        "name": "Bosch Series 4 Wet & Dry Multi Functional Vacuum Cleaner ",
        "description": " Parquet and other delicate floor surfaces require especially gentle cleaning. Our parquet brush gently and thoroughly vacuums all sensitive floor surfaces, thanks to its soft bristles made of natural hair.",
        "image": "/assets/imags/h4-slide3.png",
        "price": 100,
        "tag":"p17",
        "incard":0
    },
    {
        "id": 18,
        "name": "Yoss 16A Triple Load Power Adapter - High Quality  ",
        "description": " High quality joint for all electrical devices. Safety plug to protect childrenExcellent for mobile chargers which does not allow charging plug to be vibrated.Works efficiently and securely on all high load electrical devices such as warmers, boilers, automatic washers, electric afarans and all other devices.Global standards Non-flammable outer body High quality brass insoles ",
        "image": "/assets/imags/h4-slide7.png",
        "price": 100,
        "tag":"p18",
        "incard":0
    },
    {
        "id": 19,
        "name": "Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
        "description": "About this item 6GB RAM Storage: 128GB color: Black",
        "image": "/assets/imags/h4-slide7.png",
        "price":100,
        "tag":"p19",
        "incard":0
    },
    {
        "id": 20,
        "name": "Toshiba LED 32 Inch HD TV with Built-In Receiver",
        "description": "Brand: ToshibaTV type: standard TVResolution: 1366 x 768Aspect ratio: 16:09Viewing angle: 178 degreeFilter type: comb filterAudio system: Dolby plus technologySpeaker output: 8 watt x 2Color: blackRemote control: yes  Unique and fashionable design.of high quality material suitable weight Compatible with multiple devices",
        "image": "/assets/imags/h4-slide.png",
        "price": 100,
        "tag":"p20",
        "incard":0
    },
    {
        "id": 21,
        "name": "Careflection M10 in-Ear Wireless Touch Bluetooth Earplugs in ",
        "description": "About this itemIndividual power display of earbuds and charging case - L/R Bluetooth earbuds battery separated LED display design, it will display how much battery remaining in the charging base When putting into the case, you can know when is the best time to charge. Up to 220 hours play time, charge as you go - built-in 2000mAh rechargeable battery charging case, wireless earbuds can play for 5.5 hours on a single charge, portable charger box recharge can provide 220 hours playback. It can be charged automatically once the earbuds is put in the charging case. You can go out for fun without worrying about battery shortage, your needs are met from the start of the day to its end.",
        "image": "/assets/imags/product-5.jpg",
        "price": 100,
        "tag":"p21",
        "incard":0
    },
    {
        "id": 22,
        "name": "Jmary KP-2234 Portable Lightweight Aluminum Tripod - Black",
        "description": "العلامة التجارية : JMARY  متوافق مع : كاميرا الفيديو نوع الملحقات : حامل ثلاثي",
        "image": "/assets/imags/61P0+za20AL._AC_SX569_.jpg",
        "price": 100,
        "tag":"p22",
        "incard":0
    },
    {
        "id": 23,
        "name": "Bosch Series 4 Wet & Dry Multi Functional Vacuum Cleaner",
        "description": " Parquet and other delicate floor surfaces require especially gentle cleaning. Our parquet brush gently and thoroughly vacuums all sensitive floor surfaces, thanks to its soft bristles made of natural hair.",
        "image": "/assets/imags/61P0+za20AL._AC_SX569_.jpg",
        "price": 100,
        "tag":"p23",
        "incard":0
    },
    {
        "id": 24,
        "name": "Yoss 16A Triple Load Power Adapter ",
        "description": " High quality joint for all electrical devices. Safety plug to protect childrenExcellent for mobile chargers which does not allow charging plug to be vibrated.Works efficiently and securely on all high load electrical devices such as warmers, boilers, automatic washers, electric afarans and all other devices.Global standards Non-flammable outer body High quality brass insoles ",
        "image": "/assets/imags/71T5NVOgbpL._AC_SX569_.jpg",
        "price": 100,
        "tag":"p24",
        "incard":0
    },
    {
        "id": 25,
        "name": "Samsung Galaxy A23 Dual SIM BLACK 6GB RAM 128GB 4G",
        "description": "About this item 6GB RAM Storage: 128GB color: Black",
        "image": "/assets/imags/81i6m64KmUL.__AC_SY300_SX300_QL70_ML2_.jpg",
        "price": 500,
        "tag":"p25",
        "incard":0
    },
    {
        "id": 26,
        "name": "Toshiba LED 32 Inch HD TV with Built-In Receiver, Black - 32L3965EA ",
        "description": "Brand: ToshibaTV type: standard TVResolution: 1366 x 768Aspect ratio: 16:09Viewing angle: 178 degreeFilter type: comb filterAudio system: Dolby plus technologySpeaker output: 8 watt x 2Color: blackRemote control: yes  Unique and fashionable design.of high quality material suitable weight Compatible with multiple devices",
        "image": "/assets/imags/h4-slide2.png",
        "price": 700,
        "tag":"p26",
        "incard":0
    },
    {
        "id": 27,
        "name": "Careflection M10 in-Ear Wireless Touch Bluetooth ",
        "description": "About this itemIndividual power display of earbuds and charging case - L/R Bluetooth earbuds battery separated LED display design, it will display how much battery remaining in the charging base When putting into the case, you can know when is the best time to charge. Up to 220 hours play time, charge as you go - built-in 2000mAh rechargeable battery charging case, wireless earbuds can play for 5.5 hours on a single charge, portable charger box recharge can provide 220 hours playback. It can be charged automatically once the earbuds is put in the charging case. You can go out for fun without worrying about battery shortage, your needs are met from the start of the day to its end.",
        "image": "/assets/imags/71GLMJ7TQiL._AC_SX679_.jpg",
        "price": 200,
        "tag":"p27",
        "incard":0
    },
    {
        "id": 28,
        "name": "Jmary KP-2234 Portable Lightweight Aluminum Tripod - Black",
        "description": "العلامة التجارية : JMARY  متوافق مع : كاميرا الفيديو نوع الملحقات : حامل ثلاثي",
        "image": "/assets/imags/h4-slide4.png",
        "price": 200,
        "tag":"p28",
        "incard":0
    },
    {
        "id": 29,
        "name": "Bosch Series 4 Wet & Dry Multi Functional ",
        "description": " Parquet and other delicate floor surfaces require especially gentle cleaning. Our parquet brush gently and thoroughly vacuums all sensitive floor surfaces, thanks to its soft bristles made of natural hair.",
         "image": "/assets/imags/product-5.jpg",
        "price": 200,
        "tag":"p29",
        "incard":0
    },
    {
        "id": 30,
        "name": "Yoss 16A Triple Load Power Adapter - High Quality  ",
        "description": " High quality joint for all electrical devices. Safety plug to protect childrenExcellent for mobile chargers which does not allow charging plug to be vibrated.Works efficiently and securely on all high load electrical devices such as warmers, boilers, automatic washers, electric afarans and all other devices.Global standards Non-flammable outer body High quality brass insoles ",
        "image": "/assets/imags/71T5NVOgbpL._AC_SX569_.jpg",
        "price": 200,
        "tag":"p30",
        "incard":0
    }
]

for (let index = 0; index < card.length; index++) {
    card[index].addEventListener("click",()=>{
    cardNumbers(product[index]);
    totalCostProduct(product[index]);
    })}
//load the number for product
 function onloadNumberCard(){
    var cardnumbers= localStorage.getItem("cardNumber");
    if(cardnumbers){
        document.getElementById("numberofproduct").textContent=cardnumbers;

    }
}
// number for product that user buy it
function cardNumbers(pro){
    var pro1=pro;
   var cardnumbers= localStorage.getItem("cardNumber");
   cardnumbers=parseInt(cardnumbers);
   if(cardnumbers){
    localStorage.setItem("cardNumber",cardnumbers+1);
    document.getElementById("numberofproduct").textContent=cardnumbers+1;
      
}
   else
   {
    localStorage.setItem("cardNumber",1);
    document.getElementById("numberofproduct").textContent=1;
   }
    
    productdatainlocal(pro1);
// item(pro1);
}
// load product from localstorge and show it the list of product that user by it
function productdatainlocal(pro)
{
   let carditems=localStorage.getItem("productitems");
   carditems=JSON.parse(carditems);
   if(carditems!=null)
   {
    if(carditems[pro.tag]==undefined)
    {
        //us ... to extract eny object before and add new object 
        carditems={...carditems,
           [pro.tag]:pro
        }
    }
    carditems[pro.tag].incard+=1;

   }
   else{
    pro.incard=1;
    carditems={[pro.tag]:pro}
   }
 localStorage.setItem("productitems",JSON.stringify(carditems));
    
}
// clculate total cost for all product
function totalCostProduct(pro){
var totalcost= localStorage.getItem("totalCost");
 if(totalcost!=null)
 {
    totalcost=parseFloat(totalcost)
    localStorage.setItem("totalCost",totalcost+pro.price)
 }
 else
 {
    localStorage.setItem("totalCost",pro.price)
 }
}
onloadNumberCard();
