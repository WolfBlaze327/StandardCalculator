var firstVal = null;
var secVal;
let operator_hold;
var result;

function UserInput(input) 
{
   
   let prev = String(document.getElementById("result").value);
   let newval = prev+""+input
   document.getElementById("result").value = newval;
   console.log("prev:"+prev);
   console.log("newval:"+newval);   
}

function Dot() 
{

   let present = String(document.getElementById("result").value)
   let newval = present+"."
   var spresent = newval.split("");

   console.log("pres: "+present);
   console.log("new: "+newval);
   console.log("spres: "+spresent);
   if (spresent[0] == ".") 
   {
      console.log("first if = "+true);
      document.getElementById("result").value = "0"+newval;
   }
   else
   {
      console.log("pres: "+present);
      console.log("new: "+newval);
      console.log("spres: "+spresent);
      console.log("first if = "+false);
      UserInput(".");
   }
}

function Clear()
{
   document.getElementById("result").value = "";
}
function ClearAll()
{
   document.getElementById("result").value = "";
   document.getElementById("equation").value = "";
   firstVal = null;
   secVal = null;
   operator_hold = null;
   result = null;
   console.log("ope:"+operator_hold);
   console.log("fval:"+firstVal);
   console.log("sval:"+secVal);
   console.log("rval:"+result);
}

function BackSpace()
{
   let value = String(document.getElementById("result").value);
   let backspc = value.slice(0,-1);
   document.getElementById("result").value = backspc;
   firstVal = backspc;
   console.log("fval"+firstVal);
   console.log("val"+value);
   console.log(backspc);
}

function Operator(operate)
{
   
   if (firstVal == null)
   {
      firstVal = document.getElementById("result").value;
      document.getElementById("result").value = "";
   }
   else
      secVal = document.getElementById("result").value;
      document.getElementById("result").value = "";

   if(operate === '+')
   {
      operator_hold = '+';
      document.getElementById("equation").value = firstVal+"+";
      console.log("ope:"+operator_hold);
      console.log("fval:"+firstVal);
      console.log("sval:"+secVal);
   }
   if(operate === '-')
   {
      operator_hold = '-';
      document.getElementById("equation").value = firstVal+"-";
      console.log("ope:"+operator_hold);
      console.log("fval:"+firstVal);
      console.log("sval:"+secVal);
   }
   if(operate === '*')
   {
      operator_hold = '*';
      document.getElementById("equation").value = firstVal+"*";
      console.log("ope:"+operator_hold);
      console.log("fval:"+firstVal);
      console.log("sval:"+secVal);
   }
   if(operate === '/')
   {
      operator_hold = '/';
      document.getElementById("equation").value = firstVal+"/";
      console.log("ope:"+operator_hold);
      console.log("fval:"+firstVal);
      console.log("sval:"+secVal);
   }
   if(operate === '%')
   {
      operator_hold = '%';
      document.getElementById("equation").value = firstVal+"%";
      console.log("ope"+operator_hold);
      console.log("fval"+firstVal);
      console.log("sval"+secVal);
   }


   if(operate === "=")
   {
      if(operator_hold === "+")
      {
         result = parseFloat(firstVal) + parseFloat(secVal);
         document.getElementById("equation").value = firstVal + "+" + secVal + "=";
         firstVal = result;                  
         secVal = null;
         document.getElementById("result").value = result;
         console.log("res"+result);
         console.log("fval"+firstVal);
         console.log("sval"+secVal);
         console.log("ope:"+operator_hold);
      }
      if(operator_hold === "-")
      {
         result = parseFloat(firstVal) - parseFloat(secVal);
         document.getElementById("equation").value = firstVal + "-" + secVal + "=";
         secVal = result;         
         firstVal = null;
         document.getElementById("result").value = result;
         console.log("res"+result);
         console.log("fval"+firstVal);
         console.log("sval"+secVal);
      }
      if(operator_hold === "*")
      {
         result = parseFloat(firstVal) * parseFloat(secVal);
         document.getElementById("equation").value = firstVal + "*" + secVal + "=";
         secVal = result;         
         firstVal = null;
         document.getElementById("result").value = result;
         console.log("res"+result);
         console.log("fval"+firstVal);
         console.log("sval"+secVal);
      }
      if(operator_hold === "/")
      {
         result = parseFloat(firstVal) / parseFloat(secVal);
         document.getElementById("equation").value = firstVal + "/" + secVal + "=";
         secVal = result;         
         firstVal = null;
         document.getElementById("result").value = result;
         console.log("res"+result);
         console.log("fval"+firstVal);
         console.log("sval"+secVal);
      }
      if(operator_hold === "%")
      {
         result = parseFloat(firstVal) % parseFloat(secVal);
         document.getElementById("equation").value = firstVal + "%" + secVal + "=";
         secVal = result;         
         firstVal = null;
         document.getElementById("result").value = result;
         console.log("res"+result);
         console.log("fval"+firstVal);
         console.log("sval"+secVal);
      }
   }
}

function SquareRoot()
{
   firstVal = document.getElementById("result").value;
   document.getElementById("result").value = Math.sqrt(firstVal);
   operator_hold = null;
   firstVal = document.getElementById("result").value;
   console.log(operator_hold);
   console.log("res"+result);
   console.log("fval"+firstVal);
   console.log("sval"+secVal);
}

function Exponential()
{
   firstVal = document.getElementById("result").value;
   document.getElementById("result").value = firstVal*firstVal;
   operator_hold = null;
   firstVal = document.getElementById("result").value;
   console.log(operator_hold);
   console.log("res"+result);
   console.log("fval"+firstVal);
   console.log("sval"+secVal);
}

function Fraction()
{
   firstVal = document.getElementById("result").value;
   document.getElementById("result").value = 1/firstVal;
   operator_hold = null;
   firstVal = document.getElementById("result").value;
   console.log(operator_hold);
   console.log("res"+result);
   console.log("fval"+firstVal);
   console.log("sval"+secVal);
}

function Sign() 
{
   document.getElementById("result").value = document.getElementById("result").value * -1;
}