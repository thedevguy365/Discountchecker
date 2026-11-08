
const plusbutton = document.getElementById("explandbtn");
const minusbutton = document.getElementById("collpsbtn");
const contentbox = document.getElementById("contentbox");
const inputboxes2 = document.getElementById("inputboxes2");
const thirdinput = document.getElementById("thirdinput");
const calcbutton = document.getElementById("calculatebtn");
const price = document.getElementById("priceinput");
const discount = document.getElementById("discountinput");
const calctext = document.getElementById("calctext");
const newcalctext = document.getElementById("newcalctext");
const calchead = document.getElementById("calchead");
const calcheadnew = document.getElementById("calcheadnew");
const alttext = document.getElementById("alttext");
const calculatebtn = document.getElementById("calculatebtn");
const optionsdiv = document.getElementById("optionsdiv");
const checkdisctxt = document.getElementById("checkdisctxt");
const instructionstxt = document.getElementById("instructionstxt");
const inputboxes = document.getElementById("inputboxes");
const slogantxt = document.getElementById("slogantxt");
const newslogan = document.getElementById("newslogan");
const checkprice = document.getElementById("checkprice");
const discountvalue = document.getElementById("amtvalue");
const pricefinal = document.getElementById("pricefinal");
const originalamt = document.getElementById("originalamt");
const promoval = document.getElementById("promoval");
const promovalue = document.getElementById("promovalue");
const copyresult = document.getElementById("copyresult");
const breakdownoption = document.getElementById("breakdownoption");
const breakdownoption2 = document.getElementById("breakdownoption2");
const uparrowimg = document.getElementById("uparrowimg");
const downarrow = document.getElementById("downarrow");
const pricebreakdown = document.getElementById("pricebreakdown");
const optxt = document.getElementById("optxt");
const optxt2 = document.getElementById("optxt2");
const opval = document.getElementById("opval");
const opval2 = document.getElementById("opval2");
const fpamount = document.getElementById("fpamount");
const finaldiv = document.getElementById("finaldiv");
const logoicon = document.getElementById("logoicon");
const darklogoicon = document.getElementById("darklogoicon");
const darkmode = document.getElementById("darkmode");
const lightmode = document.getElementById("lightmode");
const body = document.getElementById("body");
const headbox= document.getElementById("headbox");
const headerlogo = document.getElementById("headerlogo");
const dotimgdark = document.getElementById("dotimgdark");
const dotimg = document.getElementById("dotimg");
const greentextbox = document.getElementById("greentextbox");
const darktextbox = document.getElementById("darktextbox");
const savedamount = document.getElementById("savedamount");
const textamount1 = document.getElementById("amount1");
const discountdesc = document.getElementById("discountdesc");
const greybox = document.getElementById("greybox");
const para2 = document.getElementById("para2");
const breakdownoptiondark = document.getElementById("breakdownoptiondark");
const breakdownoption2dark = document.getElementById("breakdownoption2dark");
const fptxt = document.getElementById("fptxt");
const originalprice = document.getElementById("originalprice");
const beforedisc = document.getElementById("beforedisc");
const disctxt = document.getElementById("disctxt");
const disctxt2 = document.getElementById("disctxt2");
const optionstxt = document.getElementById("optionstxt");
const optional = document.getElementById("optional");
const plusbuttondark = document.getElementById("explandbtndark");
const minusbuttondark = document.getElementById("collpsbtndark");

// this is for more options function //

plusbutton.addEventListener('click', function(){
    plusbutton.style.display = 'none';
    minusbutton.style.display = 'block';
    inputboxes2.style.display = 'flex'
    thirdinput.style.display = 'block'
    contentbox.style.height = '750px';

});

plusbuttondark.addEventListener('click', function(){
    plusbuttondark.style.display = 'none';
    minusbuttondark.style.display = 'block';
    inputboxes2.style.display = 'flex'
    thirdinput.style.display = 'block'
    contentbox.style.height = '750px';
});


// This is to collapse more option function //

minusbutton.addEventListener('click', function(){
    plusbutton.style.display = 'block';
    minusbutton.style.display = 'none';
    inputboxes2.style.display = 'none'
    thirdinput.style.display = 'none'
    contentbox.style.height = '450px';
});

minusbuttondark.addEventListener('click', function(){
    plusbuttondark.style.display = 'block';
    minusbuttondark.style.display = 'none';
    inputboxes2.style.display = 'none'
    thirdinput.style.display = 'none'
    contentbox.style.height = '450px';
});

// This will calculcate the total discount //

calcbutton.addEventListener('click', function(){

    const priceval = price.value.trim();
    const discountval = discount.value.trim();

    const amount = parseFloat(priceval);
    const offer = parseFloat(discountval);

    const discountamout = (amount * offer) / 100;
    const finalamount = amount - discountamout;

    if(priceval == 0 || discountval == 0){
        alert('Please enter price & discount value');
        location.reload();
    };

    calctext.style.display = 'none';
    newcalctext.style.display = 'block';
    calchead.style.display = 'none';
    calcheadnew.style.display = 'block';
    alttext.style.display = 'block';
    calculatebtn.style.display = 'none';
    optionsdiv.style.display = 'none';
    checkdisctxt.style.display = 'none';
    instructionstxt.style.display = 'none';
    inputboxes.style.display = 'none';
    slogantxt.style.display = 'none';
    newslogan.style.display = 'block';
    newcontent.style.display = 'flex';
    contentbox.style.height = '450px';

    discountvalue.textContent = `${(discountamout).toFixed(2)}`;
    pricefinal.textContent = `${(finalamount).toFixed(2)}`;
    originalamt.textContent = `${amount}`;
    promoval.textContent = `${offer}`;
    promovalue.textContent = `${offer}`;

});


// This will reload the page to check another price //

checkprice.addEventListener('click', function(){
    location.reload();
});

// this will expand the breakdown section and display price breakdown section in Light mode //

breakdownoption.addEventListener('click', function(){

    contentbox.style.height = '750px';
    breakdownoption.style.display = 'none';
    breakdownoption2.style.display = 'flex';
    pricebreakdown.style.display = 'flex';
    finaldiv.style.display = `flex`;
});

// this will expand the breakdown section and display price breakdown section in Dark mode //

breakdownoptiondark.addEventListener('click', function(){

    contentbox.style.height = '750px';
    breakdownoptiondark.style.display = 'none';
    breakdownoption2dark.style.display = 'flex';
    pricebreakdown.style.display = 'flex';
    finaldiv.style.display = `flex`;
});


// This function will show price breakup in light mode //

breakdownoption.addEventListener('click', function(){

    const priceval = price.value.trim();
    const discountval = discount.value.trim();
    const amount = parseFloat(priceval);
    const offer = parseFloat(discountval);
    const discountamout = (amount * offer) / 100;
    const finalamount = amount - discountamout; 

    opval.textContent = `${priceval}`;
    optxt2.textContent = `Discount (${discountval}%)`;
    opval2.textContent = `-${discountamout}`;
    fpamount.textContent = `${finalamount}`;
})

// this function will show price breakup in dark mode //

breakdownoptiondark.addEventListener('click', function(){

    const priceval = price.value.trim();
    const discountval = discount.value.trim();
    const amount = parseFloat(priceval);
    const offer = parseFloat(discountval);
    const discountamout = (amount * offer) / 100;
    const finalamount = amount - discountamout; 

    opval.textContent = `${priceval}`;
    optxt2.textContent = `Discount (${discountval}%)`;
    opval2.textContent = `-${discountamout}`;
    fpamount.textContent = `${finalamount}`;
})

// this will collapse the price breakdown in light mode //

breakdownoption2.addEventListener('click', function(){
    contentbox.style.height = '450px';
    breakdownoption.style.display = 'flex';
    breakdownoption2.style.display = 'none';
    pricebreakdown.style.display = 'none';
    finaldiv.style.display = `none`;
});

// this will collapse the price breakdown in dark mode //

breakdownoption2dark.addEventListener('click', function(){
    contentbox.style.height = '450px';
    breakdownoptiondark.style.display = 'flex';
    breakdownoption2dark.style.display = 'none';
    pricebreakdown.style.display = 'none';
    finaldiv.style.display = `none`;
});

darkmode.addEventListener('click', function(){

    lightmode.style.display = 'block';
    darkmode.style.display = 'none';
    body.style.backgroundColor = '#0C1120';
    headbox.style.backgroundColor = '#151D2D';
    headerlogo.style.color = '#EEF2FF';
    logoicon.style.display = 'none';
    darklogoicon.style.display = 'block';
    calctext.style.color = '#9DAAF9';
    newcalctext.style.color = '#9DAAF9';
    calchead.style.color = '#F7F9FC';
    calcheadnew.style.color = '#F7F9FC';
    alttext.style.color = '#AAB5C7';
    contentbox.style.backgroundColor = '#151D2D';
    contentbox.style.borderColor = '#2B3548';
    greentextbox.style.display = 'none';
    darktextbox.style.display = 'flex';
    savedamount.style.color = '#F7F9FC';
    textamount1.style.color = '#7BE5B1';
    discountdesc.style.color = '#AAB5C7';
    greybox.style.backgroundColor = '#252E4A';
    para2.style.color = '#F7F9FC';
    checkprice.style.backgroundColor = '#9DAAF9';
    checkprice.style.color = 'black';
    copyresult.style.backgroundColor = '#151D2D';
    copyresult.style.color = 'white';
    copyresult.style.borderColor = '#2B3548';
    breakdownoption.style.display = 'none';
    breakdownoptiondark.style.display = 'flex';
    breakdownoption2.style.display = 'none';
    breakdownoption2dark.style.display = 'none';
    opval.style.color = '#F7F9FC';
    opval2.style.color = '#F7F9FC';
    fptxt.style.color = '#F7F9FC';
    fpamount.style.color = '#F7F9FC';
    optxt.style.color = '#AAB5C7';
    optxt2.style.color = '#AAB5C7';
    checkdisctxt.style.color = '#F7F9FC';
    instructionstxt.style.color = '#AAB5C7';
    originalprice.style.color = '#F7F9FC';
    price.style.color = '#F7F9FC';
    price.style.backgroundColor = '#0C1120';
    price.style.borderColor = '#2B3548';
    beforedisc.style.color = '#AAB5C7';
    disctxt.style.color = '#F7F9FC';
    discount.style.color = '#F7F9FC';
    discount.style.backgroundColor = '#0C1120';
    discount.style.borderColor = '#2B3548';
    disctxt2.style.color = '#AAB5C7';
    optionstxt.style.color = '#9DAAF9';
    optional.style.color = '#AAB5C7';
    plusbutton.style.display = 'none';
    plusbuttondark.style.display = 'block'
    calculatebtn.style.backgroundColor = '#9DAAF9';
});

lightmode.addEventListener('click', function(){

    lightmode.style.display = 'none';
    darkmode.style.display = 'block';
    body.style.backgroundColor = '#F7F8FC';
    headbox.style.backgroundColor = '#FFFFFF';
    headerlogo.style.color = '#182235';
    logoicon.style.display = 'block';
    darklogoicon.style.display = 'none';   
    calctext.style.color = '#4F46E5';
    newcalctext.style.color = '#4F46E5'; 
    calchead.style.color = '#182235';
    calcheadnew.style.color = '#182235';
    alttext.style.color = '#667085';
    contentbox.style.backgroundColor = '#FFFFFF';
    contentbox.style.borderColor = '#E4E8F0';
    greentextbox.style.display = 'flex';
    darktextbox.style.display = 'none';
    savedamount.style.color = '#182235';
    textamount1.style.color = '#087F5B';
    discountdesc.style.color = '#667085';
    greybox.style.backgroundColor = '#E4E8F0';
    para2.style.color = 'black';
    checkprice.style.backgroundColor = '#9DAAF9';
    checkprice.style.color = 'white';
    copyresult.style.backgroundColor = 'white';
    copyresult.style.color = 'black';
    copyresult.style.borderColor = '#E4E8F0';
    breakdownoption.style.display = 'flex';
    breakdownoptiondark.style.display = 'none';
    breakdownoption2.style.display = 'none';
    breakdownoption2dark.style.display = 'none';
    opval.style.color = '#182235';
    opval2.style.color = '#182235';
    fptxt.style.color = '#182235';
    fpamount.style.color = '#182235';
    optxt.style.color = '#667085';
    optxt2.style.color = '#667085';
    checkdisctxt.style.color = '#182235';
    instructionstxt.style.color = '#667085';
    originalprice.style.color = '#182235';
    price.style.color = '#182235';
    price.style.backgroundColor = '#FFFFFF';
    price.style.borderColor = '#E4E8F0';
    beforedisc.style.color = '#667085';
    disctxt.style.color = '#182235';
    discount.style.color = '#182235';
    discount.style.backgroundColor = '#FFFFFF';
    discount.style.borderColor = '#E4E8F0';
    disctxt2.style.color = '#667085';
    optionstxt.style.color = '#4F46E5';
    optional.style.color = '#667085';
    plusbutton.style.display = 'block';
    plusbuttondark.style.display = 'none';
    calculatebtn.style.backgroundColor = '#4F46E5';
});